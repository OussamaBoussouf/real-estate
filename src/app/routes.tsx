import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '../layouts/RootLayout';
import { Homepage } from '../pages/index.ts';
import PropertyPage from '../features/property/pages/PropertyPage';
import SinglePropertyPage from '../features/property/pages/SinglePropertyPage';
import DashboardLayout from '../layouts/DashboardLayout';
import ProtectedRoute from '../features/auth/components/ProtectedRoute.tsx';

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
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
  },
]);
