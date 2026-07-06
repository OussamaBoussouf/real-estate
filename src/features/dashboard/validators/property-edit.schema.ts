import * as Yup from 'yup';

const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_FILE_SIZE = 1024 * 1024;

export const PROPERTY_EDIT_SCHEMA = Yup.object({
  title: Yup.string().required('title is required'),
  type: Yup.string().required('type is required'),
  size: Yup.number()
    .min(100, 'size must be at least 100')
    .required('size is required'),
  description: Yup.string().required('description is required'),
  price: Yup.number().required('price is required'),
  bedrooms: Yup.number().required('bedrooms is required'),
  bathrooms: Yup.number().required('bathrooms is required'),
  city: Yup.string().required('city is required'),
  address: Yup.string().required('address is required'),
  images: Yup.array()
    .of(
      Yup.mixed<File>()
        .test('fileSize', function (value) {
          if (!(value instanceof File)) return false;
          if (value.size > MAX_FILE_SIZE) {
            return this.createError({
              message: `exceeds 1MB limit`,
            });
          }
          return true;
        })
        .test('fileType', function (value) {
          if (!(value instanceof File)) return false;
          if (!ALLOWED_FILE_TYPES.includes(value.type)) {
            return this.createError({
              message: `must be JPG, PNG, or WebP`,
            });
          }
          return true;
        })
    )
    .min(3, 'At least 3 images are required')
});
