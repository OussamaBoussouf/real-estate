import * as Yup from 'yup';

export const SEARCH_SCHEMA = Yup.object({
  city: Yup.string().required('field is required'),
  type: Yup.string().required('field is required'),
  category: Yup.string().required('field is required'),
});
