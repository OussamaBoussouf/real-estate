import Button from '../../../shared/components/Button';
import CustomSelect from '../../../shared/components/CustomSelect';
import { Label } from 'radix-ui';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const cities = [
  { value: 'kenitra', label: 'Kenitra' },
  { value: 'rabat', label: 'Rabat' },
  { value: 'salé', label: 'Sale' },
  { value: 'casablanca', label: 'Casablanca' },
];

const type = [
  { value: 'rent', label: 'Rent' },
  { value: 'buy', label: 'Buy' },
];

const category = [
  { value: 'apartment', label: 'Apartment' },
  { value: 'house', label: 'House' },
  { value: 'office', label: 'Office' },
];

function SearchForm() {
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
      console.log('Form submitted:', values);
    },
  });

  return (
    <div className="search-form__container">
      <h2 className="search-form__title">Search Properties</h2>
      <form onSubmit={formik.handleSubmit} className="search-form">
        <div className="search-form__control">
          <Label.Root htmlFor="city">City</Label.Root>
          <CustomSelect
            setFieldValue={formik.setFieldValue}
            value={formik.values.city}
            name="city"
            id="city"
            placeholder="Select a city..."
            options={cities}
          />
          {formik.touched.city && formik.errors.city ? (
            <span className="text-danger">{formik.errors.city}</span>
          ) : null}
        </div>
        <div className="search-form__control">
          <Label.Root htmlFor="type">Type</Label.Root>
          <CustomSelect
            setFieldValue={formik.setFieldValue}
            value={formik.values.type}
            name="type"
            id="type"
            placeholder="Select a type..."
            options={type}
          />
          {formik.touched.type && formik.errors.type ? (
            <span className="text-danger">{formik.errors.type}</span>
          ) : null}
        </div>
        <div className="search-form__control">
          <Label.Root htmlFor="category">Category</Label.Root>
          <CustomSelect
            setFieldValue={formik.setFieldValue}
            value={formik.values.category}
            name="category"
            id="category"
            placeholder="Select a category..."
            options={category}
          />
          {formik.touched.category && formik.errors.category ? (
            <span className="text-danger">{formik.errors.category}</span>
          ) : null}
        </div>
        <Button type="submit" className="btn btn--rounded btn--primary">
          Search
        </Button>
      </form>
    </div>
  );
}

export default SearchForm;
