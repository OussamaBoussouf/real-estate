import { createBrowserRouter } from 'react-router';
import RootLayout from '../layouts/RootLayout';

import { Homepage, AboutPage, ContactPage} from '../pages';
import PropertyPage from '../features/property/pages/PropertyPage';
import SinglePropertyPage from '../features/property/pages/SinglePropertyPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component:  Homepage},
      { path: '/about', Component: AboutPage },
      { path: '/contact', Component: ContactPage },
      { path: '/properties', Component: PropertyPage },
      { path: '/properties/:id', Component: SinglePropertyPage }
    ],
  },
]);
