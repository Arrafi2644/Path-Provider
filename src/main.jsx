import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './routes/router';
import DataProvider from './provider/DataProvider';
import AuthProvider from './provider/AuthProvider';
import Router from './routes/router';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <DataProvider>
        <RouterProvider router={Router} />
      </DataProvider>
    </AuthProvider>

  </StrictMode>,
)
