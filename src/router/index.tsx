import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import App from "../App";
import { ControlledForm } from "../pages/ControlledForm/ControlledForm";
import { UncontrolledForm } from "../pages/UncontrolledForm/UncontrolledForm";

export const APP_ROUTES = {
  HOME: "/",
  CONTROLLED: "/controlled_form",
  UNCONTROLLED: "/uncontrolled_form",
};
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: APP_ROUTES.CONTROLLED,
    element: <ControlledForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: APP_ROUTES.UNCONTROLLED,
    element: <UncontrolledForm />,
    errorElement: <ErrorPage />,
  },
]);
