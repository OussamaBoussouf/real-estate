function PropertyDetailsEdit() {
  return (
    <fieldset className="p-md grid col-2 border-dashed border-rounded">
      <legend>Property Details</legend>
      <div>
        <label className="fs-xxs" htmlFor="bedrooms">
          Bedrooms
        </label>
        <br />
        <input className="w-full" type="number" id="bedrooms" />
      </div>
      <div>
        <label className="fs-xxs" htmlFor="bathrooms">
          Bathrooms
        </label>
        <br />
        <input className="w-full" type="number" id="bathrooms" />
      </div>
      <div>
        <label className="fs-xxs" htmlFor="city">
          City
        </label>
        <br />
        <input className="w-full" type="text" id="city" />
      </div>
      <div>
        <label className="fs-xxs" htmlFor="address">
          Address
        </label>
        <br />
        <input className="w-full" type="text" id="address" />
      </div>
      <div className="span-2">
        <span className="fs-xxs">Amenities</span>
        <br />
        <div className="grid col-3">
          <AmenitiesMultiSelect amenities={AMENITIES} />
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
  amenities: { label: string; value: string }[];
};

const AmenitiesMultiSelect = ({ amenities }: AmenitiesMultiSelectProps) => {
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
          />
        </div>
      ))}
    </>
  );
};
