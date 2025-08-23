import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './Router/Router';
import AuthProvider from './Context/AuthProvider';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-[#EAECED]'>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </StrictMode>
)
