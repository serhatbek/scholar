import { createBrowserRouter } from 'react-router-dom';
import { ContactUs, Courses, Error, Events, Home, Layout } from './pages';

export const router = createBrowserRouter([
  {
    path: '/scholar/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: '/scholar/courses',
        element: <Courses />,
        errorElement: <Error />,
      },
      {
        path: '/scholar/events',
        element: <Events />,
        errorElement: <Error />,
      },
      {
        path: '/scholar/contact',
        element: <ContactUs />,
        errorElement: <Error />,
      },
    ],
  },
]);
