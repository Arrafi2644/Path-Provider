import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './routes/router';
import DataProvider from './provider/DataProvider';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      
    <RouterProvider router={router} />
    </DataProvider>
   
  </StrictMode>,
)
