import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Auth/Login";
import { AppRoutes } from "./AppRoutes";
import ProtectedRoute from "./ProtectedRoute";
import RediractRoute from "./RediractRoute";
import { routes } from "./Routes";
import Layout from "../Layout/Layout";

const RouterProvider = createBrowserRouter([
  { element: <ProtectedRoute />,
     children: [
      { path: routes.Home, element: <Login />, index: true },
      { path: routes.Login, element: <Login /> },
    ] },
  { element: <RediractRoute />, children: [
    {
      element: <Layout />,
      children: AppRoutes,
    },
  ] },
]);

export default RouterProvider;
