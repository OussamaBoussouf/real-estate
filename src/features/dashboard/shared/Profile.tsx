import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useAuthContext } from '../../../context/AuthContext';
import ProfileImageForm from './ProfileImageForm';
import PersonalInfoForm from './PersonalInfoForm';

function Profile() {
  const { user } = useAuthContext();

  const formik = useFormik({
    initialValues: {
      imageFile: null,
      fullName: user?.fullName || '',
      email: user?.email || '',
      phone: user?.phone || '',
      address: user?.address || '',
      password: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('full name is required'),
      email: Yup.string()
        .email('invalid email address')
        .required('email is required'),
      phone: Yup.string().required('phone number is required'),
      address: Yup.string().required('address is required'),
      password: Yup.string().min(
        8,
        'password should contain at least 8 characters'
      ),
    }),
    onSubmit: (values, actions) => {
      console.log(values);
      actions.setSubmitting(false);
    },
  });

  return (
    <>
      <h1 className="mb-xl">My Profile</h1>
      {/* Profile image component */}
      <ProfileImageForm profileImage={user?.profileImage} />
      {/* Email, Full Name, Phone and Adderss */}
      <PersonalInfoForm user={user}/>
      {/* <div className="profile__personal-info">
        <div>
          <h2 className="fs-xs">Personal information</h2>
          <p className="fs-xxs">update your personal info here</p>
        </div>
        <div className="profile__form">
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
              {formik.touched.fullName && formik.errors.fullName ? (
                <span className="text-danger fs-xxs">
                  {formik.errors.fullName}
                </span>
              ) : null}
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
              {formik.touched.email && formik.errors.email ? (
                <span className="text-danger fs-xxs">
                  {formik.errors.email}
                </span>
              ) : null}
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
            {formik.touched.phone && formik.errors.phone ? (
              <span className="text-danger fs-xxs">{formik.errors.phone}</span>
            ) : null}
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
            {formik.touched.address && formik.errors.address ? (
              <span className="text-danger fs-xxs">
                {formik.errors.address}
              </span>
            ) : null}
          </div>
        </div>
      </div> */}
      {/* Password */}
      <div className="profile__password">
        <div>
          <h2 className="fs-xs">Password</h2>
          <p className="fs-xxs">enter your new password here</p>
        </div>
        <div className="profile__form">
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
            {formik.touched.password && formik.errors.password ? (
              <span className="text-danger fs-xxs">
                {formik.errors.password}
              </span>
            ) : null}
          </div>
        </div>
      </div>
      <div>
        <button
          disabled={formik.isSubmitting}
          type="submit"
          className={`btn btn--info btn--rounded mt-md profile__save-btn ${
            formik.isSubmitting && 'btn--disabled'
          }`}
        >
          Save Changes
        </button>
      </div>
    </>
  );
}

export default Profile;
