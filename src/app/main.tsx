import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { router } from './routes';
import { ImageKitProvider } from '@imagekit/react';
import '../styles/style.scss';
import '../api/index';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ImageKitProvider
        urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      >
        <RouterProvider router={router} />
      </ImageKitProvider>
      <ToastContainer position="top-right" autoClose={2500} />
    </QueryClientProvider>
  </StrictMode>
);
