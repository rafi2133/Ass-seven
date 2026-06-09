import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
// import { RouterProvider } from 'react-router/dom';
import MainLayout from './layout/MainLayout';
import Homepage from './pages/homepage/homepage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import TimeLine from './pages/TimeLine/TimeLine';
import Status from './pages/Status/Status';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
       index: true,
       element: <Homepage></Homepage>
      },
      {
        path: '/timeline',
        element: <TimeLine></TimeLine>
      },
      {
        path:'/status',
        element: <Status></Status>
      }
    ],
    errorElement:<ErrorPage></ErrorPage>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>


   <RouterProvider router={router} /> 
  </StrictMode>,
)
