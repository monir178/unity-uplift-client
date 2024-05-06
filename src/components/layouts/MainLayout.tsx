import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Container from "../ui/Container";

const MainLayout = () => {
  return (
    <Container className="bg-red-500">
      <Navbar />
      <Outlet />
    </Container>
  );
};

export default MainLayout;
