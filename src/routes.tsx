import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

const MainPage = lazy(() => import('./pages').then((module) => ({ default: module.MainPage })));
const DetailsPage = lazy(() =>
    import('./pages').then((module) => ({ default: module.DetailsPage })),
);

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: 'character/:itemId',
        element: <DetailsPage />,
    },
]);
