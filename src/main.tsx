import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import { Work } from './pages/Work';
import { About } from './pages/About';
import { Project } from './pages/Project';
import { ThemeProvider } from '@context/ThemeProvider.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Work />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/projects/:slug',
        element: <Project />,
        loader: async ({ params }) => {
          try {
            const module = await import(
              `@assets/projects/markdown/${params.slug}.md`
            );
            const response = await fetch(module.default);
            return await response.text();
          } catch (error) {
            console.error('Error loading markdown content:', error);
            return '';
          }
        },
      },
      {
        path: '*',
        element: <Navigate to="/" replace={true} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
