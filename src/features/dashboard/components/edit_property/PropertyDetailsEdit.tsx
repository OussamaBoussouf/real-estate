import { FormikProps } from 'formik';
import { PropertyFormValues } from '../../../../types/property';


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
        <div className="grid col-3">
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
            amenities={AMENITIES}
          />
        </div>
      </div>
    </fieldset>
  );
}

export default PropertyDetailsEdit;

export const AMENITIES = [
  { label: 'Pool', value: 'pool' },
  { label: 'Gym', value: 'gym' },
  { label: 'Parking', value: 'parking' },
  { label: 'Elevator', value: 'elevator' },
  { label: 'Garden', value: 'garden' },
  { label: 'Balcony', value: 'balcony' },
  { label: 'Terrace', value: 'terrace' },
  { label: 'Air Conditioning', value: 'air_conditioning' },
  { label: 'Heating', value: 'heating' },
  { label: 'WiFi', value: 'wifi' },
  { label: 'Security System', value: 'security_system' },
  { label: 'CCTV', value: 'cctv' },
  { label: 'Fireplace', value: 'fireplace' },
  { label: 'Furnished', value: 'furnished' },
  { label: 'Kitchen Equipped', value: 'kitchen_equipped' },
  { label: 'Refrigerator', value: 'refrigerator' },
  { label: 'Washing Machine', value: 'washing_machine' },
  { label: 'Dishwasher', value: 'dishwasher' },
  { label: 'Microwave', value: 'microwave' },
  { label: 'Storage Room', value: 'storage_room' },
  { label: 'Basement', value: 'basement' },
  {
    label: 'Wheelchair Accessible',
    value: 'wheelchair_accessible',
  },
  { label: 'Concierge', value: 'concierge' },
  { label: 'Playground', value: 'playground' },
  { label: 'BBQ Area', value: 'bbq_area' },
  { label: 'Solar Panels', value: 'solar_panels' },
];

type AmenitiesMultiSelectProps = {
  onCheck: (amenity: string) => void;
  onUncheck: (amenity: string) => void;
  amenities: { label: string; value: string }[];
};

const AmenitiesMultiSelect = ({
  amenities,
  onCheck,
  onUncheck,
}: AmenitiesMultiSelectProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const value = event.target.value;
    if (isChecked) {
      onCheck(value);
    } else {
      onUncheck(value);
    }
  };
  return (
    <>
      {amenities.map(amenity => (
        <div className="multi-select d-flex-between" key={amenity.value}>
          <label className="fs-xxs w-full" htmlFor={amenity.value}>
            {amenity.label}
          </label>
          <input
            type="checkbox"
            id={amenity.value}
            name="amenities"
            value={amenity.value}
            onChange={handleChange}
          />
        </div>
      ))}
    </>
  );
};
