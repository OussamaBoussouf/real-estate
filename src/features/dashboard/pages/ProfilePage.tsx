
import { useAuthContext } from '../../../context/AuthContext';
import ProfileImageForm from  '../components/profile/ProfileImageForm';
import PersonalInfoForm from '../components/profile/PersonalInfoForm';
import PasswordForm from '../components/profile/PasswordForm';
import { UserInfo } from '../../../types/user';

function Profile() {
  const { user } = useAuthContext();

  return (
    <>
      <h1 className="mb-xl">My Profile</h1>
      {/* Profile image component */}
      <ProfileImageForm profileImage={user?.profileImage} />
      {/* Email, Full Name, Phone and Adderss */}
      <PersonalInfoForm user={user as UserInfo}/>
      {/* Password */}
      <PasswordForm/>
    </>
  );
}

export default Profile;