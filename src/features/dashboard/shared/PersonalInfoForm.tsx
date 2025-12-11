import { useFormik } from 'formik';
import * as Yup from 'yup';
import { UserInfo } from '../../../types/user';

function PersonalInfoForm({ user }: { user: UserInfo | null }) {
  const formik = useFormik({
    initialValues: {
      fullName: user?.fullName || '',
      email: user?.email || '',
      phone: user?.phone || '',
      address: user?.address || '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('full name is required'),
      email: Yup.string()
        .email('invalid email address')
        .required('email is required'),
      phone: Yup.string()
        .matches(/[0-9]/, 'enter a valid phone number')
        .min(10, 'phone number should be at least 10 digits')
        .required('phone is required'),
      address: Yup.string().required('address is required'),
    }),
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    },
  });

  return (
    <div className="profile__personal-info">
      <div>
        <h2 className="fs-xs">Personal information</h2>
        <p className="fs-xxs">update your personal info here</p>
      </div>
      <form onSubmit={formik.handleSubmit} className="profile__form">
        <div className="cols-2">
          <div className="profile__form-group">
            <label className="fs-xxs" htmlFor="fullName">
              Full Name
            </label>
            <br />
            <input
              value={formik.values.fullName}
              onChange={formik.handleChange}
              type="text"
              id="fullName"
              className="profile__input"
            />
            <p className="text-danger fs-xxs">{formik.errors.fullName}</p>
          </div>
          <div className="profile__form-group">
            <label className="fs-xxs" htmlFor="email">
              Email
            </label>
            <br />
            <input
              value={formik.values.email}
              onChange={formik.handleChange}
              type="email"
              id="email"
              className="profile__input"
            />
            <p className="text-danger fs-xxs">{formik.errors.email}</p>
          </div>
        </div>
        <div className="profile__form-group">
          <label className="fs-xxs" htmlFor="phone">
            Phone
          </label>{' '}
          <br />
          <input
            value={formik.values.phone}
            onChange={formik.handleChange}
            type="text"
            id="phone"
            className="profile__input"
          />
          <p className="text-danger fs-xxs">{formik.errors.phone}</p>
        </div>
        <div className="profile__form-group">
          <label className="fs-xxs" htmlFor="address">
            Address
          </label>{' '}
          <br />
          <input
            value={formik.values.address}
            onChange={formik.handleChange}
            type="text"
            id="address"
            className="profile__input"
          />
          <p className="text-danger fs-xxs">{formik.errors.address}</p>
        </div>
        <button
          disabled={formik.isSubmitting}
          type="submit"
          className={`btn btn--info btn--rounded mt-md profile__save-btn ${
            formik.isSubmitting && 'btn--disabled'
          }`}
        >
          Save changes
        </button>
      </form>
    </div>
  );
}

export default PersonalInfoForm;
