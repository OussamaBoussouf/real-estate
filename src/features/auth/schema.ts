import * as Yup from 'yup';

export const LOGIN_SCHEMA = Yup.object({
  email: Yup.string()
    .email('invalid email address')
    .required('email is required'),
  password: Yup.string()
    .min(8, 'password should contain at least 8 characters')
    .required('password is required'),
});

export const SIGNUP_SCHEMA = Yup.object({
  fullName: Yup.string().required('full name is required'),
  email: Yup.string()
    .email('invalid email address')
    .required('email is required'),
  phone: Yup.string()
    .matches(/[0-9]/, 'enter a valid phone number')
    .min(10, 'phone number should be at least 10 digits')
    .required('phone is required'),
  password: Yup.string()
    .min(8, 'password should contain at least 8 characters')
    .required('password is required'),
});
