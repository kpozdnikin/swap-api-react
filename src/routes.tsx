import { MainPage } from "./pages/MainPage";
import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { DetailsPage } from "./pages/DetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "list",
        element: <MainPage />,
      },
      {
        path: "list/:itemId",
        element: <DetailsPage />,
      },
    ],
  },
]);
