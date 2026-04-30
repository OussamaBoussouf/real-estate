import Button from '../../../shared/components/Button';
import { Label } from 'radix-ui';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createQueryParams } from '../../../shared/utils/utils';
import { useNavigate } from 'react-router';
import CustomSelect from '../../../shared/components/CustomSelect';

const CITIES = [
  { value: 'kenitra', label: 'Kenitra' },
  { value: 'rabat', label: 'Rabat' },
  { value: 'salé', label: 'Sale' },
  { value: 'casablanca', label: 'Casablanca' },
];

const TYPE = [
  { value: 'rent', label: 'Rent' },
  { value: 'buy', label: 'Buy' },
];

const CATEGORY = [
  { value: 'apartment', label: 'Apartment' },
  { value: 'house', label: 'House' },
  { value: 'condo', label: 'Condo' },
];

function SearchForm() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      city: '',
      type: '',
      category: '',
    },
    validationSchema: Yup.object({
      city: Yup.string().required('field is required'),
      type: Yup.string().required('field is required'),
      category: Yup.string().required('field is required'),
    }),
    onSubmit: values => {
      const query = createQueryParams(values);
      navigate(`properties?${query}`);
    },
  });

  return (
    <div className="search-form__container">
      <h2 className="search-form__title">Search Properties</h2>
      <form onSubmit={formik.handleSubmit} className="search-form">
        <div className="search-form__control">
          <Label.Root htmlFor="city">City</Label.Root>
          <CustomSelect
            onChange={value => formik.setFieldValue('city', value)}
            options={CITIES}
            placeholder="Select a city"
            id="city"
            value={formik.values.city}
          />
          <span className="text-danger fs-xxs">
            {formik.touched.city && formik.errors.city}
          </span>
        </div>
        <div className="search-form__control">
          <Label.Root htmlFor="type">Type</Label.Root>
          <CustomSelect
            onChange={value => formik.setFieldValue('type', value)}
            options={TYPE}
            placeholder="Select a type"
            id="type"
            value={formik.values.type}
          />
          <span className="text-danger fs-xxs">
            {formik.touched.type && formik.errors.type}
          </span>
        </div>
        <div className="search-form__control">
          <Label.Root htmlFor="category">Category</Label.Root>
          <CustomSelect
            onChange={value => formik.setFieldValue('category', value)}
            options={CATEGORY}
            placeholder="Select a category"
            id="category"
            value={formik.values.category}
          />
          <span className="text-danger fs-xxs">
            {formik.touched.category && formik.errors.category}
          </span>
        </div>
        <Button type="submit" className="btn btn--rounded btn--primary mt-sm">
          Search
        </Button>
      </form>
    </div>
  );
}

export default SearchForm;
