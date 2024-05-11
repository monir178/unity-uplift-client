import { Link, Outlet } from "react-router-dom";
import Container from "../ui/Container";
import { useFadeIn } from "@/hooks/useFadeIn";
import { motion } from "framer-motion";
import Navbar from "../ui/Navbar";
import Footer from "@/pages/Footer";
import useScrollToTop from "@/hooks/useScrollToTop";

const DashboardLayout = () => {
  useScrollToTop();
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Container>
        <motion.div
          className="pt-20"
          variants={useFadeIn()}
          initial="hidden"
          animate="visible">
          <Container>
            <div className="drawer lg:drawer-open lg:gap-8">
              <input
                id="dashboard-drawer"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content ">
                <Outlet />
              </div>
              <div className="drawer-side ">
                <label
                  htmlFor="dashboard-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"></label>
                <ul className="menu p-4 w-4/6 md:w-80 min-h-full pt-20 md:pt-24 lg:pt-4 text-xl bg-gradient-to-tr from-popover to-popover-foreground text-white ">
                  <li>
                    <Link to="/dashboard/create-supply">Create Supply</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/supply-stats">Supply Stats</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/supplies">All Supplies</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </motion.div>
      </Container>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
