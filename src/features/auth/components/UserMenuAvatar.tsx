import { DropdownMenu } from 'radix-ui';
import { useAuthContext } from '../../../context/AuthContext';
import { Link } from 'react-router';

function UserMenuAvatar({ profileImage }: { profileImage: string }) {
  const { logout } = useAuthContext();

  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="avatar__trigger"
        >
          <img
            src={profileImage}
            alt="profile image"
            width="50"
            height="50"
            className="avatar__image"
          />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={2}
          className="avatar__menu-content"
        >
          <DropdownMenu.Item className="avatar__menu-item">
            <Link to="dashboard">Go to Dashboard</Link>
          </DropdownMenu.Item>

          <DropdownMenu.Item onClick={logout} className="avatar__menu-item">
            Logout
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default UserMenuAvatar;
