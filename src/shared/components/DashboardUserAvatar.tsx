import { DropdownMenu } from 'radix-ui';
import { LogOut } from 'lucide-react';
import { UserInfo } from '../../types/user';
import { useMediaQuery } from '../hooks/useMediaQuery';

type DashboardUserAavatarProps = {
  user: UserInfo;
  logout: () => void;
};

function DashboardUserAvatar({ user, logout }: DashboardUserAavatarProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className='w-full' asChild>
        {isMobile ? (
          <img
            width="45"
            height="45"
            className="dashboard-avatar__image"
            src={user.profileImage}
            alt="profile image avatar"
          />
        ) : (
          <button className="dashboard-avatar badge--secondary">
            <img
              width="45"
              height="45"
              className="dashboard-avatar__image"
              src={user.profileImage}
              alt="profile image avatar"
            />
            <div className="dashboard-avatar__info">
              <span className="fs-xxs">{user.fullName}</span>
              <span className="fs-xxxs">{user.role}</span>
            </div>
          </button>
        )}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content side="top" align="start" className="dashboard-avatar__menu">
          <DropdownMenu.Item
            onClick={logout}
            className="badge--danger fs-xxs d-flex gap-sm dashboard-avatar__item"
          >
            <LogOut size={20} color="red" /> Log out
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default DashboardUserAvatar;
