import Button from '../../shared/components/Button';
import { Label } from 'radix-ui';
import { useFormik } from 'formik';
import { createQueryParams } from '../../shared/utils/utils';
import { useNavigate } from 'react-router';
import CustomSelect from '../../shared/components/CustomSelect';
import { SEARCH_SCHEMA } from './schema';
import { CITIES } from '../../constants/geography';
import { PROPERTY_CATEGORIES, PROPERTY_TYPES } from '../../constants/properties';



function SearchForm() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      city: '',
      type: '',
      category: '',
    },
    validationSchema: SEARCH_SCHEMA,
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
            options={PROPERTY_TYPES}
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
            options={PROPERTY_CATEGORIES}
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
