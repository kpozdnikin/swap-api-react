import { createBrowserRouter } from 'react-router-dom';
import { DetailsPage, MainPage } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "character/:itemId",
    element: <DetailsPage />,
  },
]);
