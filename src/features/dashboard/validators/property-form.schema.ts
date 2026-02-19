
import * as Yup from 'yup';

export const PROPERTY_INFO_SCHEMA = Yup.object({
    title: Yup.string().required('title is required'),
    type: Yup.string().required('type is required'),
    size: Yup.number().min(100, 'size must be at least 100').required('size is required'),
    description: Yup.string().required('description is required'),
    price: Yup.number().required('price is required'),
})

export const PROPERTY_DETAILS_SCHEMA = Yup.object({
    bedrooms: Yup.number().required('bedrooms is required'),
    bathrooms: Yup.number().required('bathrooms is required'),
    city: Yup.string().required('city is required'),
    address: Yup.string().required('address is required'),
})