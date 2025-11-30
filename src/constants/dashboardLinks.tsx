import {
  CirclePlus,
  House,
  MessageCircleMore,
  UserPen,
  UsersRound,
} from 'lucide-react';
import type { Role } from '../types/user';
import { ReactNode } from 'react';

export interface SidebarLink {
  label: string;
  path: string;
  icon: ReactNode;
}

export const tenantLinks: SidebarLink[] = [
  {
    label: 'Add Property',
    path: '/dashboard/add-property',
    icon: <CirclePlus />,
  },
  {
    label: 'My Properties',
    path: '/dashboard/my-properties',
    icon: <House />,
  },
  {
    label: 'Notifications',
    path: '/dashboard/notifications',
    icon: <MessageCircleMore />,
  },
  {
    label: 'Profile',
    path: '/dashboard/profile',
    icon: <UserPen />,
  },
];

export const adminLinks: SidebarLink[] = [
  {
    label: 'Properties',
    path: '/dashboard/properties',
    icon: <House />,
  },
  {
    label: 'Users',
    path: '/dashboard/users',
    icon: <UsersRound />,
  },
  {
    label: 'Profile',
    path: '/dashboard/profile',
    icon: <UserPen />,
  },
];

export const sidebarLinks: Record<Role, SidebarLink[]> = {
  tenant: tenantLinks,
  admin: adminLinks,
};
