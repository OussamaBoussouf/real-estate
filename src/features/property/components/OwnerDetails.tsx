import SendMessageModal from './SendMessageModal';
import { useAuthContext } from '../../../context/AuthContext';
import { Login } from '../../auth';

function OwnerDetails() {
  
  const { user } = useAuthContext();


  return (
    <div className="owner-details">
      <div className="owner-details__info">
        <img
          width="80"
          height="80"
          className="owner-details__avatar"
          src="https://a.storyblok.com/f/191576/1176x882/f95162c213/profile_picture_hero_before.webp"
          alt="owner profile image"
        />
        <div className="owner-details__meta">
          <span className="owner-details__name fw-bold">Alex Ripon</span>
          <span>New York, NY</span>
        </div>
      </div>
      {!!user ? (
        <SendMessageModal>Send Message</SendMessageModal>
      ) : (
        <Login className="btn btn--primary w-full mt-md"> Send Message</Login>
      )}
    </div>
  );
}

export default OwnerDetails;
