import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '../layouts/RootLayout';
import { Homepage } from '../pages/index.ts';
import PropertyPage from '../features/property/pages/PropertyPage';
import SinglePropertyPage from '../features/property/pages/SinglePropertyPage';
import {
  AddPropertyPage,
  EditPropertyPage,
  MyPropertiesPage,
  NotificationsPage,
  PropertiesPage,
  UsersPage,
} from '../features/dashboard/index.ts';
import NotAuthorized from '../pages/NotAuthorized.tsx';
import ProfilePage from '../features/dashboard/pages/ProfilePage.tsx';
import DashboardLayout from '../layouts/dashboard/DashboardLayout.tsx';
import { ROUTES } from '../constants/routes.ts';



import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext.tsx';
import { Role } from '../types/user.ts';


interface ProtectedRouteProps {
  roles?: Role[];
}

function ProtectedRoute({roles}: ProtectedRouteProps) {
  
  const {user} = useAuthContext();

  if(!user) {
    return <Navigate to='/' replace/>;
  }

  if(roles && !roles.includes(user.role)) {
    return <Navigate to='/not-authorized' replace/>
  }

  return <Outlet/>;
}


export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: ROUTES.PROPERTY.HOME, element: <PropertyPage /> },
      {
        path: ROUTES.PROPERTY.SINGLE_PROPERTY,
        element: <SinglePropertyPage />,
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          { path: ROUTES.DASHBOARD.PROFILE, element: <ProfilePage /> },
          {
            element: <ProtectedRoute roles={['landlord']} />,
            children: [
              {
                path: ROUTES.DASHBOARD.ADD_PROPERTY,
                element: <AddPropertyPage />,
              },
              {
                path: ROUTES.DASHBOARD.MY_PROPERTIES,
                element: <MyPropertiesPage />,
              },
              {
                path: ROUTES.DASHBOARD.NOTIFICATIONS,
                element: <NotificationsPage />,
              },
              {
                path: ROUTES.DASHBOARD.EDIT_PROPERTY,
                element: <EditPropertyPage />,
              },
            ],
          },
          {
            element: <ProtectedRoute roles={['admin']} />,
            children: [
              { path: ROUTES.DASHBOARD.USERS, element: <UsersPage /> },
              {
                path: ROUTES.DASHBOARD.PROPERTIES,
                element: <PropertiesPage />,
              },
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
