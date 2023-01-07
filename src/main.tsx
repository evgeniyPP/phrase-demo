import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Index from './Index';
import Demo from './Demo';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: 'demo',
    element: <Demo />,
  },
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
