import * as Yup from 'yup';
import { isAllowedFileType, MAX_FILE_SIZE } from '../../../shared/utils/fileValidators';


// Profile form validation schema
export const PERSONAL_INFO_FORM_SCHEMA = Yup.object({
  fullName: Yup.string().required('full name is required'),
  email: Yup.string()
    .email('invalid email address')
    .required('email is required'),
  phone: Yup.string()
    .matches(/[0-9]/, 'enter a valid phone number')
    .min(10, 'phone number should be at least 10 digits')
    .required('phone is required'),
  address: Yup.string().required('address is required'),
});

export const PASSWORD_FORM_SCHEMA = Yup.object({
  password: Yup.string()
    .required('password is required')
    .min(8, 'password should contain at least 8 characters'),
  confirmPassword: Yup.string()
    .required('password is required')
    .oneOf([Yup.ref('password')], 'passwords must match'),
});

// Property edit form validation schema
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
              message: `exceeds ${MAX_FILE_SIZE / (1024 * 1024)}MB limit`,
            });
          }
          return true;
        })
        .test('fileType', function (value) {
          if (!(value instanceof File)) return false;
          if (!isAllowedFileType(value.type)) {
            return this.createError({
              message: `must be JPG, PNG, or WebP`,
            });
          }
          return true;
        })
    )
    .min(3, 'At least 3 images are required'),
});

// Property form validation schema
export const PROPERTY_INFO_SCHEMA = Yup.object({
  title: Yup.string().required('title is required'),
  type: Yup.string().required('type is required'),
  size: Yup.number()
    .min(100, 'size must be at least 100')
    .required('size is required'),
  description: Yup.string().required('description is required'),
  price: Yup.number().required('price is required'),
});

export const PROPERTY_DETAILS_SCHEMA = Yup.object({
  bedrooms: Yup.number().required('bedrooms is required'),
  bathrooms: Yup.number().required('bathrooms is required'),
  city: Yup.string().required('city is required'),
  address: Yup.string().required('address is required'),
});

export const PROPERTY_IMAGES_SCHEMA = Yup.object().shape({
  images: Yup.array()
    .of(
      Yup.object({
        file: Yup.mixed<File>()
          .test('fileSize', function (value) {
            if (!(value instanceof File)) return false;
            if (value.size > MAX_FILE_SIZE) {
              return this.createError({
                message: `${value.name} exceeds 1MB limit`,
              });
            }
            return true;
          })
          .test('fileType', function (value) {
            if (!(value instanceof File)) return false;
            if (!isAllowedFileType(value.type)) {
              return this.createError({
                message: `${value.name} must be JPG, PNG, or WebP`,
              });
            }
            return true;
          }),
      })
    )
    .min(3, 'At least 3 images are required')
    .max(8, 'Maximum 8 images allowed'),
});
