import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useAuthContext } from '../../../context/AuthContext';
import ProfileImageForm from './ProfileImageForm';
import PersonalInfoForm from './PersonalInfoForm';
import PasswordForm from './PasswordForm';

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
      {/* Password */}
      <PasswordForm/>
    </>
  );
}

export default Profile;
