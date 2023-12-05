import type { FC } from 'react';
import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes';

export const App = () => (
    <div>
        <RouterProvider router={router} />
    </div>
)
