import { FormikProps } from 'formik';
import { PropertyFormValues } from '../../../../types/property';
import AmenitiesMultiSelect from '../../../../shared/components/AmenitiesMultiSelect';
import { AMENITIES } from '../../../../constants/properties';

function PropertyDetailsEdit({
  values,
  handleChange,
  setFieldValue,
  touched,
  errors,
}: FormikProps<PropertyFormValues>) {
  return (
    <fieldset className="mb-lg p-md grid col-2 border-dashed border-rounded">
      <legend>Property Details</legend>
      <div>
        <label className="fs-xxs" htmlFor="bedrooms">
          Bedrooms
        </label>
        <br />
        <input
          className="w-full"
          type="number"
          id="bedrooms"
          name="bedrooms"
          value={values.bedrooms}
          onChange={handleChange}
        />
        {touched.bedrooms && errors.bedrooms ? (
          <p className="text-danger fs-xxs">{errors.bedrooms}</p>
        ) : null}
      </div>
      <div>
        <label className="fs-xxs" htmlFor="bathrooms">
          Bathrooms
        </label>
        <br />
        <input
          className="w-full"
          type="number"
          id="bathrooms"
          name="bathrooms"
          value={values.bathrooms}
          onChange={handleChange}
        />
        {touched.bathrooms && errors.bathrooms ? (
          <p className="text-danger fs-xxs">{errors.bathrooms}</p>
        ) : null}
      </div>
      <div>
        <label className="fs-xxs" htmlFor="city">
          City
        </label>
        <br />
        <input
          className="w-full"
          type="text"
          id="city"
          name="city"
          value={values.city}
          onChange={handleChange}
        />
        {touched.city && errors.city ? (
          <p className="text-danger fs-xxs">{errors.city}</p>
        ) : null}
      </div>
      <div>
        <label className="fs-xxs" htmlFor="address">
          Address
        </label>
        <br />
        <input
          className="w-full"
          type="text"
          id="address"
          name="address"
          value={values.address}
          onChange={handleChange}
        />
        {touched.address && errors.address ? (
          <p className="text-danger fs-xxs">{errors.address}</p>
        ) : null}
      </div>
      <div className="span-2">
        <span className="fs-xxs">Amenities</span>
        <br />
        <AmenitiesMultiSelect
          onCheck={(amenity: string) =>
            setFieldValue('amenities', [...values.amenities, amenity])
          }
          onUncheck={(amenity: string) => {
            const updatedAmenities = values.amenities.filter(
              a => a !== amenity
            );
            setFieldValue('amenities', updatedAmenities);
          }}
          options={AMENITIES}
        />
      </div>
    </fieldset>
  );
}

export default PropertyDetailsEdit;



