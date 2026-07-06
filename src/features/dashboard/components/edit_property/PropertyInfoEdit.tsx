import { FormikProps } from 'formik';
import CustomSelect from '../../../../shared/components/CustomSelect';
import { PropertyFormValues } from '../../../../types/property';

function PropertyInfoFormEdit({
  values,
  handleChange,
  setFieldValue,
  touched,
  errors,
}: FormikProps<PropertyFormValues>) {
  return (
    <fieldset className="mb-lg p-md grid col-2 border-dashed border-rounded">
      <legend>Property Info</legend>
      <div>
        <label htmlFor="name">Title</label>
        <br />
        <input
          name="title"
          value={values.title}
          onChange={handleChange}
          className="w-full"
          type="text"
          id="name"
        />
        {touched.title && errors.title ? (
          <p className="text-danger fs-xxs">{errors.title}</p>
        ) : null}
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <br />
        <input
          name="price"
          value={values.price}
          onChange={handleChange}
          className="w-full"
          type="number"
          id="price"
        />
        {touched.price && errors.price ? (
          <p className="text-danger fs-xxs">{errors.price}</p>
        ) : null}
      </div>
      <div>
        <label htmlFor="type">Type</label>
        <br />
        <CustomSelect
          id="type"
          onChange={value => setFieldValue('type', value)}
          placeholder="Select Type"
          options={[
            {
              value: 'sale',
              label: 'For Sale',
            },
            {
              value: 'rent',
              label: 'For Rent',
            },
          ]}
        />
        {touched.type && errors.type ? (
          <p className="text-danger fs-xxs">{errors.type}</p>
        ) : null}
      </div>
      <div>
        <label htmlFor="size">Size</label>
        <br />
        <input
          name="size"
          value={values.size}
          onChange={handleChange}
          className="w-full"
          type="number"
          id="size"
        />
        {touched.size && errors.size ? (
          <p className="text-danger fs-xxs">{errors.size}</p>
        ) : null}
      </div>
      <div className="span-2">
        <label htmlFor="description">Description</label>
        <br />
        <textarea
          onChange={handleChange}
          value={values.description}
          className="w-full"
          id="description"
          cols={30}
          rows={10}
        />
        {touched.description && errors.description ? (
          <p className="text-danger fs-xxs">{errors.description}</p>
        ) : null}
      </div>
    </fieldset>
  );
}

export default PropertyInfoFormEdit;
