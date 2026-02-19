import { FormikProps } from 'formik';
import { AMENITIES } from '../../../constants/property-form';
import MultiSelectPicker from '../MultiSelectPicker';
import { useCallback } from 'react';

type FormValues = {
  bedrooms: string;
  bathrooms: string;
  city: string;
  address: string;
  amenities: string[];
};

function PropertyDetailsStep({
  values,
  touched,
  errors,
  handleChange,
  setFieldValue,
}: FormikProps<FormValues>) {
  const handleAmenitySelect = useCallback(
    (amenities: string[]) => {
      setFieldValue('amenities', amenities);
    },
    [setFieldValue]
  );

  return (
    <div className="grid col-2">
      {/* PROPERTY BEDROOMS*/}
      <div>
        <label className="fs-xxs" htmlFor="bedrooms">
          Bedrooms
        </label>{' '}
        <br />
        <input
          value={values.bedrooms}
          type="number"
          id="bedrooms"
          onChange={handleChange}
          className="w-full"
        />
        {touched.bedrooms && errors.bedrooms ? (
          <p className="text-danger fs-xxs">{errors.bedrooms}</p>
        ) : null}
      </div>
      {/* PROPERTY BATHROOMS */}
      <div>
        <label className="fs-xxs" htmlFor="bathrooms">
          Bathrooms
        </label>{' '}
        <br />
        <input
          value={values.bathrooms}
          type="number"
          id="bathrooms"
          onChange={handleChange}
          className="w-full"
        />
        {touched.bathrooms && errors.bathrooms ? (
          <p className="text-danger fs-xxs">{errors.bathrooms}</p>
        ) : null}
      </div>

      {/* PROPERTY CITY */}
      <div>
        <label className="fs-xxs" htmlFor="city">
          City
        </label>{' '}
        <br />
        <input
          value={values.city}
          type="text"
          id="city"
          onChange={handleChange}
          className="w-full"
        />
        {touched.city && errors.city ? (
          <p className="text-danger fs-xxs">{errors.city}</p>
        ) : null}
      </div>
      {/* PROPERTY ADDRESS */}
      <div>
        <label className="fs-xxs" htmlFor="address">
          Address
        </label>{' '}
        <br />
        <input
          className="w-full"
          value={values.address}
          type="text"
          id="address"
          onChange={handleChange}
        />
        {touched.address && errors.address ? (
          <p className="text-danger fs-xxs">{errors.address}</p>
        ) : null}
      </div>
      {/* PROPERTY AMENITIES */}
      <fieldset className="span-2 reset-fieldset">
        <legend className="fs-xxs mb-sm">Select amenities</legend>
        <MultiSelectPicker
          options={AMENITIES}
          selectedValues={values.amenities}
          onSelect={handleAmenitySelect}
        />
      </fieldset>
    </div>
  );
}

export default PropertyDetailsStep;
