import App from "@/App";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import CreateSupply from "@/pages/CreateSupply";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Supplies from "@/pages/Supplies";
import SupplyStats from "@/pages/SupplyStats";
import HomeIndex from "@/pages/home/HomeIndex";
import AllReliefGoods from "@/pages/reliefGoods/AllReliefGoods";
import SingleReliefDetails from "@/pages/reliefGoods/SingleReliefDetails";
import { Navigate, createBrowserRouter } from "react-router-dom";

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
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard/supply-stats" />,
      },
      {
        path: "supply-stats",
        element: <SupplyStats />,
      },
      {
        path: "supplies",
        element: <Supplies />,
      },
      {
        path: "create-supply",
        element: <CreateSupply />,
      },
    ],
  },
]);
