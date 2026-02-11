import { FormikProps } from 'formik';

type FormValues = {
  title: string;
  type: string;
  size: string;
  description: string;
  price: string;
};

function PropertyInfoStep({
  values,
  handleChange,
  touched,
  errors,
}: FormikProps<FormValues>) {
  return (
    <div className="grid col-2">
      {/* PROPERTY TITLE AND PRICE */}
      <div>
        <label className='fs-xxs' htmlFor="title">Title</label> <br />
        <input
          value={values.title}
          type="text"
          id="title"
          onChange={handleChange}
          className="w-full"
        />
        {touched.title && errors.title ? (
          <p className="text-danger fs-xxs">{errors.title}</p>
        ) : null}
      </div>
      <div>
        <label className='fs-xxs' htmlFor="price">Price</label> <br />
        <input
          value={values.price}
          type="number"
          id="price"
          onChange={handleChange}
          className="w-full"
        />
        {touched.price && errors.price ? (
          <p className="text-danger fs-xxs">{errors.price}</p>
        ) : null}
      </div>

      {/* PROPERTY TYPE AND SIZE */}
      <div>
        <label className='fs-xxs' htmlFor="type">Type</label> <br />
        <select
          className="w-full"
          id="type"
          value={values.type}
          onChange={handleChange}
        >
          <option value="sale">For Sale</option>
          <option value="rent">For Rent</option>
        </select>
        {touched.type && errors.type ? (
          <p className="text-danger fs-xxs">{errors.type}</p>
        ) : null}
      </div>
      <div>
        <label className='fs-xxs' htmlFor="size">Size</label> <br />
        <input
          className="w-full"
          value={values.size}
          type="number"
          id="size"
          onChange={handleChange}
        />
        {touched.size && errors.size ? (
          <p className="text-danger fs-xxs">{errors.size}</p>
        ) : null}
      </div>

      {/* PROPERTY DESCRIPTION */}
      <div className='span-2'>
        <label className='fs-xxs' htmlFor="description">Description</label> <br />
        <textarea
          className="w-full"
          id="description"
          cols={30}
          rows={10}
          value={values.description}
          onChange={handleChange}
        ></textarea>
        {touched.description && errors.description ? (
          <p className="text-danger fs-xxs">{errors.description}</p>
        ) : null}
      </div>
    </div>
  );
}

export default PropertyInfoStep;
