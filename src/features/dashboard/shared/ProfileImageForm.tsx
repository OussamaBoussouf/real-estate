import { ChangeEvent, useEffect, useRef, useState } from 'react';
import DefaultProfileImg from '../../../assets/default_profile.jpg';

function ProfileImageForm({ profileImage }: { profileImage?: string }) {
  const [imageUrl, setImageUrl] = useState(profileImage);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append('imageFile', file);
      // submit formData to server
      console.log('Submitting image file:', formData.get('imageFile'));
      setFile(null);
    }
  };

  const handleOpenFileDialog = () => {
    inputFileRef.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && imageRef.current) {
      if (file.size > 1 * 1024 * 1024) {
        setError('Image cannot exceed 1MB limit.');
      } else if (!file.type.startsWith('image/')) {
        setError('Selected file is not an image.');
      } else {
        const url = URL.createObjectURL(file);
        if(error) setError(null);
        setImageUrl(url);
        setFile(file);
        imageRef.current.onload = () => {
          URL.revokeObjectURL(url);
        };
        imageRef.current.onerror = () => {
          URL.revokeObjectURL(url);
        };
      }
    }
  };

  useEffect(() => {
    return () => {
      if (imageUrl) URL.revokeObjectURL(imageUrl);
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
          src={imageUrl || DefaultProfileImg}
          alt="profile image"
        />
        {error && <p className="text-danger fs-xxs mb-sm">{error}</p>}
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
          <button type="submit" className="btn btn--primary btn--rounded mr-md">
            Update photo
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfileImageForm;
