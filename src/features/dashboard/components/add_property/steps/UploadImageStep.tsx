import { useRef } from 'react';
import { useUploadFile } from '../../../hooks/useUploadFile';
import { CloudUpload, Trash2, TriangleAlert } from 'lucide-react';
import { FormikProps } from 'formik';
import { FileObject } from '../../../../../types/property';
import ImagePlaceHolder from '../../../../../assets/image_placeholder.jpg';
import { formatFileSize } from '../../../../../shared/utils/formatter';

type FormValues = {
  images: FileObject[];
};

function UploadImageStep({
  values,
  touched,
  errors,
  isSubmitting,
  setFieldValue,
}: FormikProps<FormValues>) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    isDragging,
    handleFileChange,
    removeFile,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
  } = useUploadFile({
    initialFiles: values.images || [],
    onFileChange: files => {
      setFieldValue('images', [...files]);
    },
  });

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <div className={`image-upload__container ${isDragging && 'active'}`}>
        {/* Drag & Drop Zone */}
        <div
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            ref={fileInputRef}
            name="images"
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="upload-zone__input"
          />
          <div className="upload-zone__content">
            <CloudUpload size={35} color="gray" />
            <p>Drag & drop images here (Max file size: 1 MB)</p>
            <p className="upload-zone__info">Supports: JPG, PNG, WebP</p>
            {errors.images &&
              touched.images &&
              typeof errors.images === 'string' && (
                <p className="text-danger fs-xxs d-flex gap-xs">
                  <TriangleAlert /> {errors.images}
                </p>
              )}
            <button
              disabled={isSubmitting}
              type="button"
              className={`btn btn--primary btn--rounded mt-xs ${isSubmitting && 'btn--disabled'}`}
              onClick={handleButtonClick}
            >
              Select files
            </button>
          </div>
        </div>
      </div>
      {/* Errors */}
      {Array.isArray(errors.images) && touched.images && (
        <ul className="error__container my-md">
          {errors.images.map((error, index) => (
            <li key={index} className="fs-xxs">
              {error?.file}
            </li>
          ))}
        </ul>
      )}
      {/* Images List */}
      <div className="upload-images__list mt-lg">
        {values.images.map(image => (
          <ImagePreviewer
            key={image.id}
            image={image}
            onRemove={removeFile}
            isSubmitting={isSubmitting}
          />
        ))}
      </div>
    </>
  );
}

export default UploadImageStep;

interface ImagePreviewerProps {
  image: FileObject;
  isSubmitting?: boolean;
  onRemove: (id: string) => void;
}

const ImagePreviewer = ({
  image,
  isSubmitting,
  onRemove,
}: ImagePreviewerProps) => {
  return (
    <div className="image-previewer">
      <div className="d-flex gap-md">
        <img width={60} src={ImagePlaceHolder} alt="image placeholder" />
        <div>
          <p className="fs-xxs">{image.file.name}</p>
          <p className="fs-xxs">{formatFileSize(image.file.size)}</p>
        </div>
      </div>
      <button
        disabled={isSubmitting}
        type="button"
        className="image-previewer__delete-btn"
        onClick={() => onRemove(image.id)}
      >
        <Trash2 size="18" color="#dc3545" />
      </button>
    </div>
  );
};
