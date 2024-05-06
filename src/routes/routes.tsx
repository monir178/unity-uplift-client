import App from "@/App";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import HomeIndex from "@/pages/home/HomeIndex";
import AllReliefGoods from "@/pages/reliefGoods/AllReliefGoods";
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
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
