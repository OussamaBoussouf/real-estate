import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '../layouts/RootLayout';
import { Homepage } from '../pages/index.ts';
import PropertyPage from '../features/property/pages/PropertyPage';
import SinglePropertyPage from '../features/property/pages/SinglePropertyPage';
import DashboardLayout from '../layouts/DashboardLayout';
import ProtectedRoute from '../features/auth/components/ProtectedRoute';
import {
  AddPropertyPage,
  MyPropertiesPage,
  NotificationsPage,
  PropertiesPage,
  UsersPage,
} from '../features/dashboard/index.ts';
import NotAuthorized from '../pages/NotAuthorized.tsx';
import ProfilePage from '../features/dashboard/pages/ProfilePage.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: '/properties', element: <PropertyPage /> },
      { path: '/properties/:id', element: <SinglePropertyPage /> },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          { path: '/dashboard/profile', element: <ProfilePage /> },
          {
            element: <ProtectedRoute roles={['tenant']} />,
            children: [
              { path: '/dashboard/add-property', element: <AddPropertyPage /> },
              { path: '/dashboard/my-properties', element: <MyPropertiesPage /> },
              { path: '/dashboard/notifications', element: <NotificationsPage /> },
            ],
          },
          {
            element: <ProtectedRoute roles={['admin']} />,
            children: [
              { path: '/dashboard/users', element: <UsersPage /> },
              { path: '/dashboard/properties', element: <PropertiesPage /> },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '/not-authorized',
    element: <NotAuthorized />,
  },
]);
