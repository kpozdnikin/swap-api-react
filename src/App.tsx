import type { FC } from 'react';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { router } from './routes';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            cacheTime: 3600000,
            networkMode: 'offlineFirst',
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            retry: false,
        },
    },
});

export const App: FC = () => (
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
);
