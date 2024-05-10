import App from "@/App";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import HomeIndex from "@/pages/home/HomeIndex";
import AllReliefGoods from "@/pages/reliefGoods/AllReliefGoods";
import SingleReliefDetails from "@/pages/reliefGoods/SingleReliefDetails";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomeIndex />,
      },
      {
        path: "relief-goods",
        element: <AllReliefGoods />,
      },
      {
        path: "relief-goods/:id",
        element: <SingleReliefDetails />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
      },
    ],
  },
]);
