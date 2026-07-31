import { Plus, TriangleAlert, X } from 'lucide-react';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { FormikErrors, FormikProps } from 'formik';
import { toast } from 'react-toastify';
import { PropertyFormValues } from '../../../../types/property';


type PropertyImage = {
  id: string;
  src: string;
  file: File;
};

function PropertyImageEdit({
  touched,
  errors,
  setFieldValue,
}: FormikProps<PropertyFormValues>) {
  const [images, setImages] = useState<PropertyImage[]>([]);

  const handleImageSelection = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files) return;

    if (files.length > 8 || images.length + files.length > 8) {
      toast.error('Maximum 8 images allowed');
      return;
    }

    const newImages = Array.from(files).map(file => ({
      id: crypto.randomUUID(),
      file,
      src: URL.createObjectURL(file),
    }));


    const imagesName = new Set(
      images.map(image => `${image.file.name}-${image.file.size}`)
    );
    
    // Filter out duplicate images based on name and size
    const uniqueImages = newImages.filter(
      image => !imagesName.has(`${image.file.name}-${image.file.size}`)
    );

    setImages(prev => [...prev, ...uniqueImages]);

    setFieldValue('images', [
        ...images.map(image => image.file),
        ...uniqueImages.map(image => image.file),
      ]);

    e.target.value = '';
  };

  const handleDeleteImage = (id: string) => {
    setImages(prev => {
      const imageToDelete = prev.find(image => image.id === id);
      if (imageToDelete) {
        URL.revokeObjectURL(imageToDelete.src);
      }
      const remainingImages = prev.filter(image => image.id !== id);

      setFieldValue(
        'images',
        remainingImages.map(image => image.file)
      );
      return prev.filter(image => image.id !== id);
    });
  };

  useEffect(() => {
    return () => {
      images.forEach(image => URL.revokeObjectURL(image.src));
    };
  }, []);

  return (
    <fieldset className="mb-lg p-md border-dashed border-rounded">
      <legend>Property Photos</legend>
      <div className="d-flex-between mb-lg">
        <span className="text-danger fs-xxs d-flex-center gap-xs">
          {errors.images &&
            touched.images &&
            typeof errors.images === 'string' && (
              <>
                <TriangleAlert size={20} /> {errors.images}
              </>
            )}
        </span>
        <span className="px-sm py-xxs fs-xxs border-rounded badge--primary">
          {images.length}/8
        </span>
      </div>
      <div className="grid-layout-images">
        <ImageList
          errors={errors.images && touched.images && errors.images}
          images={images}
          onDeleteImage={handleDeleteImage}
        />
        <ImageUploader onFileChange={handleImageSelection} />
      </div>
    </fieldset>
  );
}

export default PropertyImageEdit;

const ImageUploader = ({
  onFileChange,
}: {
  onFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className="image-edit__container d-flex-center"
      onClick={handleInputClick}
    >
      <input
        ref={fileInputRef}
        onChange={onFileChange}
        type="file"
        id="images"
        name="images"
        accept="image/*"
        multiple
      />
      <button type="button" className="d-flex-center image-edit__add-btn">
        <Plus />
      </button>
    </div>
  );
};

const ImageList = ({
  images,
  onDeleteImage,
  errors,
}: {
  images: PropertyImage[];
  onDeleteImage: (id: string) => void;
  errors: string | string[] | FormikErrors<File>[] | undefined;
}) => {
  return (
    <>
      {images.map((image, idx) => {
        return (
          <div key={image.id} className="image-preview__container">
            <img
              loading="lazy"
              className="image-preview"
              width="150"
              height="150"
              src={image.src}
              alt={image.file.name}
            />
            <button
              type="button"
              onClick={() => onDeleteImage(image.id)}
              className="delete__btn d-flex-center"
            >
              <X size={20} />
            </button>
            {Array.isArray(errors) && typeof errors[idx] == 'string' && (
              <div className="image-preview__error">
                <p className="fs-xxs clr-white">{errors[idx]}</p>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};
