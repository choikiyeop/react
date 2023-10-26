import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './routes/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RecoilRoot } from 'recoil'
import ModalsProvider from './context/ModalsProvider';
import GlobalDialog from './components/dialogs/GlobalDialog';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
        <ModalsProvider>
          <GlobalDialog />
          <RouterProvider router={router} />
        </ModalsProvider>
    </QueryClientProvider>
  </RecoilRoot>
)
