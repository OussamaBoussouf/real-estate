import { useFormik } from 'formik';
import * as Yup from 'yup';

function PasswordForm() {
  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validateOnBlur: true,
    validationSchema: Yup.object({
      password: Yup.string()
        .required('password is required')
        .min(8, 'password should contain at least 8 characters'),
      confirmPassword: Yup.string()
        .required('password is required')
        .oneOf([Yup.ref('password')], 'passwords must match'),
    }),
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values));
      actions.setSubmitting(false);
    },
  });

  return (
    <div className="profile__password">
      <div>
        <h2 className="fs-xs">Password</h2>
        <p className="fs-xxs">enter your new password here</p>
      </div>
      <form onSubmit={formik.handleSubmit} className="profile__form">
        <div className="profile__form-group">
          <label className="fs-xxs" htmlFor="password">
            Password
          </label>{' '}
          <br />
          <input
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="**************"
            type="password"
            id="password"
            className="profile__input"
          />
          <p className="text-danger fs-xxs">{ formik.touched.password && formik.errors.password}</p>
        </div>
        <div className="profile__form-group">
          <label className="fs-xxs" htmlFor="confirmPassword">
            Confirm Password
          </label>{' '}
          <br />
          <input
            className="profile__input"
            placeholder="**************"
            type="password"
            id="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />
          <p className="text-danger fs-xxs">{ formik.touched.confirmPassword && formik.errors.confirmPassword}</p>
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

export default PasswordForm;
