import { createBrowserRouter } from 'react-router-dom';

import { DetailsPage, MainPage } from './pages';

// const App = lazy(() => import('./App').then((module) => ({ default: module.App })));

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
