
import { createRoot } from 'react-dom/client'
import {HelmetProvider} from 'react-helmet-async'
import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.min.css"
import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/BrowserRoute'
import { QueryClientProvider,QueryClient} from '@tanstack/react-query'
import './index.css'

const queryclient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <QueryClientProvider client={queryclient}>
      <Suspense>
        <RouterProvider router={router}></RouterProvider>
      </Suspense>
    </QueryClientProvider>
  </HelmetProvider>
);
