import { useFormik } from 'formik';
import { UserInfo } from '../../../../types/user';
import api from '../../../../app/axios';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { PERSONAL_IMAGE_FORM_SCHEMA } from '../../validators/profile.schema';

function PersonalInfoForm({ user }: { user: UserInfo }) {
  const formik = useFormik({
    initialValues: {
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
      address: user.address,
    },
    validationSchema: PERSONAL_IMAGE_FORM_SCHEMA,
    onSubmit: async (values, actions) => {
      try {
        const response = await api.put('/users/me/personal-info', values, {
          headers: {
            Authorization: `Bearer jackmarrow@gmail.com`,
          },
        });
        toast.success(response.data.message);
      } catch (error) {
        const { message: errorMessage } = error as AxiosError;
        toast.error(errorMessage);
      } finally {
        actions.setSubmitting(false);
      }
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
            <p className="text-danger fs-xxs">
              {formik.touched.fullName && formik.errors.fullName}
            </p>
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
            <p className="text-danger fs-xxs">
              {formik.touched.email && formik.errors.email}
            </p>
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
          <p className="text-danger fs-xxs">
            {formik.touched.phone && formik.errors.phone}
          </p>
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
          <p className="text-danger fs-xxs">
            {formik.touched.address && formik.errors.address}
          </p>
        </div>
        <button
          disabled={formik.isSubmitting}
          type="submit"
          className={`btn btn--info btn--rounded mt-md profile__save-btn ${
            formik.isSubmitting && 'btn--disabled'
          }`}
        >
          {formik.isSubmitting ? 'Saving...' : 'Save changes'}
        </button>
      </form>
    </div>
  );
}

export default PersonalInfoForm;
