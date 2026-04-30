import {
  CirclePlus,
  House,
  MessageSquareMore,
  UserPen,
  UsersRound,
} from 'lucide-react';
import type { Role } from '../types/user';
import { ReactNode } from 'react';

export type SidebarLink = {
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
    label: 'Lead Inbox',
    path: '/dashboard/notifications',
    icon:  <MessageSquareMore />,
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
