import {
  CirclePlus,
  House,
  LucideProps,
  Inbox,
  UserPen,
  UsersRound,
} from 'lucide-react';
import { ComponentType } from 'react';
import { ROUTES } from '../../constants/routes';


export type SidebarLink = {
  label: string;
  path: string;
  icon: ComponentType<LucideProps>;
  isInbox?: boolean;
};

const landlordLinks: SidebarLink[] = [
  {
    label: 'Add Property',
    path: ROUTES.DASHBOARD.ADD_PROPERTY,
    icon: CirclePlus,
  },
  { label: 'My Properties', path: ROUTES.DASHBOARD.MY_PROPERTIES, icon: House },
  {
    label: 'Inbox',
    path: ROUTES.DASHBOARD.NOTIFICATIONS,
    icon: Inbox,
    isInbox: true
  },
  { label: 'Profile', path: ROUTES.DASHBOARD.PROFILE, icon: UserPen },
];

const adminLinks: SidebarLink[] = [
  { label: 'Properties', path: ROUTES.DASHBOARD.PROPERTIES, icon: House },
  { label: 'Users', path: ROUTES.DASHBOARD.USERS, icon: UsersRound },
  { label: 'Profile', path: ROUTES.DASHBOARD.PROFILE, icon: UserPen },
];

const SIDEBAR_LINKS: Record<string, SidebarLink[]> = {
  landlord: landlordLinks,
  admin: adminLinks,
};

export default SIDEBAR_LINKS;
