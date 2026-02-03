import * as Yup from 'yup';

export const PERSONAL_IMAGE_FORM_SCHEMA = Yup.object({
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
