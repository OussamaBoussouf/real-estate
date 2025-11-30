import { DropdownMenu } from 'radix-ui';
import { Link } from 'react-router';
import { UserInfo } from '../../../types/user';

type UserMenuAvatarProps = {
  user: UserInfo;
  onLogout: () => void;
};

function UserMenuAvatar({ user, onLogout }: UserMenuAvatarProps) {
  

  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="avatar__trigger"
        >
          <img
            src={user.profileImage}
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
            {user.role === 'admin' ? (
              <Link to="/dashboard/properties">Go to Dashboard</Link>
            ) : (
              <Link to="/dashboard/add-property">Go to Dashboard</Link>
            )}
          </DropdownMenu.Item>

          <DropdownMenu.Item onClick={onLogout} className="avatar__menu-item">
            Logout
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default UserMenuAvatar;
