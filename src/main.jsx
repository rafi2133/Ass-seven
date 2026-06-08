import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
// import { RouterProvider } from 'react-router/dom';
import MainLayout from './layout/MainLayout';
import Homepage from './pages/homepage/homepage';
import ErrorPage from './pages/ErrorPage/ErrorPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
       index: true,
       element: <Homepage></Homepage>
      },
      
    ],
    errorElement:<ErrorPage></ErrorPage>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>


   <RouterProvider router={router} /> 
  </StrictMode>,
)
