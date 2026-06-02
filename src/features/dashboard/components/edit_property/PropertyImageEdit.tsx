

import { Plus, X } from 'lucide-react';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

type PropertyImage = {
  id: string;
  src: string;
  file: File;
};

function PropertyImageEdit() {
  const [images, setImages] = useState<PropertyImage[]>([]);

  const handleImageSelection = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const newImages = Array.from(files).map(file => ({
      id: crypto.randomUUID(),
      file,
      src: URL.createObjectURL(file),
    }));

    setImages(prev => {
      const existingNames = new Set(
        prev.map(image => `${image.file.name}-${image.file.size}`)
      );

      const uniqueImages = newImages.filter(
        image => !existingNames.has(`${image.file.name}-${image.file.size}`)
      );

      return [...prev, ...uniqueImages];
    });

    e.target.value = '';
  };

  const handleDeleteImage = (id: string) => {
    setImages(prev => {
      const imageToDelete = prev.find(image => image.id === id);
      if (imageToDelete) {
        URL.revokeObjectURL(imageToDelete.src);
      }
      return prev.filter(image => image.id !== id);
    });
  };

  useEffect(() => {
    return () => {
      images.forEach(image => URL.revokeObjectURL(image.src));
      console.log('revoked all object URLs');
    };
  }, [images]);

  return (
    <fieldset className="p-md border-dashed border-rounded">
      <legend>Property Photos</legend>
      <div className="d-flex-between mb-lg">
        <span></span>
        <span className="px-sm py-xxs fs-xxs border-rounded badge--primary">
          {images.length}/8
        </span>
      </div>
      <div className="grid-layout-images">
        <ImageList images={images} onDeleteImage={handleDeleteImage} />
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
        accept="image/*"
        multiple
      />
      <button type="button" className="d-flex-center">
        <Plus />
      </button>
    </div>
  );
};

const ImageList = ({
  images,
  onDeleteImage,
}: {
  images: PropertyImage[];
  onDeleteImage: (id: string) => void;
}) => {
  return (
    <>
      {images.map(image => {
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
          </div>
        );
      })}
    </>
  );
};
