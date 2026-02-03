import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { validateImageFile } from '../../../../shared/utils/utils';
import DefaultProfileImg from '../../../../assets/default_profile.jpg';
import api from '../../../../app/axios';

function ProfileImageForm({ profileImage }: { profileImage?: string }) {
  const [imageSrc, setImageSrc] = useState(profileImage);
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [clientError, setClientError] = useState<string | null>(null);

  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    
    try {
      setIsSubmitting(true);
      await api.put('/users/me/avatar', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer jackmarrow@gmail.com`,
        },
      });
      toast.success('Profile image has been updated successful');
    } catch (error) {
      setImageSrc(profileImage);
      console.error(error);
      toast.error('Something went wrong');
    } finally {
      setFile(null);
      setIsSubmitting(false);
    }
  };

  const handleOpenFileDialog = useCallback(() => {
    inputFileRef.current?.click();
  }, []);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const validateImage = validateImageFile(file, 1 * 1024 * 1024);

    if (validateImage) {
      setClientError(validateImage);
      setFile(null);
      return;
    }

    if (imageRef.current) {
      const url = URL.createObjectURL(file);
      if (clientError) setClientError(null);
      setImageSrc(url);
      setFile(file);
      imageRef.current.onload = () => {
        URL.revokeObjectURL(url);
      };
      imageRef.current.onerror = () => {
        URL.revokeObjectURL(url);
      };
    }
  };

  useEffect(() => {
    return () => {
      if (imageSrc) URL.revokeObjectURL(imageSrc);
    };
  }, []);

  return (
    <div>
      <h2 className="fs-xs mb-md">Profile photo</h2>
      <div className="mb-lg">
        <img
          onClick={handleOpenFileDialog}
          className="profile__image"
          ref={imageRef}
          src={imageSrc || DefaultProfileImg}
          alt="profile image"
        />
        {clientError && (
          <p className="text-danger fs-xxs mb-sm">{clientError}</p>
        )}
        <p className="fs-xxs mb-sm">
          Recommanded photo size: 126 <span>x</span> 126px
        </p>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <input
            onChange={handleFileChange}
            ref={inputFileRef}
            accept="image/*"
            type="file"
            id="imageFile"
            hidden
          />
          <button
            type="submit"
            className={`btn btn--primary btn--rounded btn--sm ${isSubmitting || !file && 'btn--disabled'}`}
            disabled={isSubmitting || !file}
          >
            {isSubmitting ? 'Updating...' : 'Update photo'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfileImageForm;
