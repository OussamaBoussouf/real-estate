import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '../layouts/RootLayout';
import { Homepage } from '../pages/index.ts';
import PropertyPage from '../features/property/pages/PropertyPage';
import SinglePropertyPage from '../features/property/pages/SinglePropertyPage';
import DashboardLayout from '../layouts/DashboardLayout';
import ProtectedRoute from '../features/auth/components/ProtectedRoute';
import {
  AddProperty,
  MyProperties,
  Notifications,
  Profile,
  Properties,
  Users,
} from '../features/dashboard/index.ts';
import NotAuthorized from '../pages/NotAuthorized.tsx';

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
          { path: '/dashboard/profile', element: <Profile /> },
          {
            element: <ProtectedRoute roles={['tenant']} />,
            children: [
              { path: '/dashboard/add-property', element: <AddProperty /> },
              { path: '/dashboard/my-properties', element: <MyProperties /> },
              { path: '/dashboard/notifications', element: <Notifications /> },
            ],
          },
          {
            element: <ProtectedRoute roles={['admin']} />,
            children: [
              { path: '/dashboard/users', element: <Users /> },
              { path: '/dashboard/properties', element: <Properties /> },
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
