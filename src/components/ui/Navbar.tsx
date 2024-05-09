import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import navLogo from "./../../assets/logo.png";

import { Button } from "../ui/button";
import { MenuSquare } from "lucide-react";
// import { AuthContext } from "@/contexts/AuthProvider";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const { user, logOut} = useContext(AuthContext);

  // const handleLogOut = () => {
  //   logOut();
  // };

  const animateNavContainer = {
    hidden: {
      opacity: 0,
      y: -30,
    },

    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        staggerChildren: 0.5,
        delayChildren: 0.5,
      },
    },
  };

  const animateNavChildren = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const menuItems = (
    <>
      <motion.li variants={animateNavChildren} whileHover="hover">
        <NavLink
          className="flex items-center hover:underline underline-offset-4"
          to="/">
          Home
        </NavLink>
      </motion.li>
      <motion.li variants={animateNavChildren} whileHover="hover">
        <NavLink
          className="flex items-center hover:underline underline-offset-4"
          to="/relief-goods">
          Relief Goods
        </NavLink>
      </motion.li>
      <motion.li variants={animateNavChildren} whileHover="hover">
        <NavLink
          className="flex items-center hover:underline underline-offset-4"
          to="/dashboard">
          Dashboard
        </NavLink>
      </motion.li>
      <motion.li variants={animateNavChildren} whileHover="hover">
        <Button className="bg-white text-popover rounded-3xl  px-5 max-w-32  border md:border-none border-primary hover:bg-gray-300 font-semibold hover:transition-all text-md">
          <NavLink to="/login">Login</NavLink>
        </Button>
      </motion.li>
      {/* {!user ? (
        <motion.li variants={animateNavLink} whileHover="hover">
          <Button className="bg-white text-primary rounded-3xl  px-7 max-w-32 hover:text-white border md:border-none border-primary hover:bg-orange-700 hover:transition-all text-lg">
            <NavLink to="/login">Login</NavLink>
          </Button>
        </motion.li>
      ) : (
        <motion.li variants={animateNavLink} whileHover="hover">
          <Button
            onClick={handleLogOut}
            className="bg-red-600 text-white rounded-3xl  px-8 max-w-32 hover:text-secondary hover:bg-white hover:transition-all">
            Log out
          </Button>
        </motion.li>
      )} */}
    </>
  );

  return (
    <header className="h-16 md:h-20 fixed w-full z-[999] bg-popover">
      <motion.nav
        variants={animateNavContainer}
        initial="hidden"
        animate="visible"
        className="max-w-[1300px] px-[20px] mx-auto h-full flex justify-between items-center   text-white">
        <Link className="flex items-center" to="/">
          <img src={navLogo} className="size-16 lg:size-20" alt="" />
          <p className="font-bold text-lg md:text-xl lg:text-2xl">
            Unity Uplift
          </p>
        </Link>

        <motion.ul
          variants={animateNavContainer}
          className="space-x-3 md:space-x-6  font-semibold text-base items-center hidden md:flex">
          {menuItems}
        </motion.ul>

        <div className="md:hidden">
          <MenuSquare
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer"
          />
        </div>
      </motion.nav>
      {menuOpen && (
        <div className="grid grid-cols-1 w-3/6 ml-auto rounded-lg bg-white border-2 border-t-0 border-r-0 text-primary md:hidden font-semibold py-4 px-2 list-none">
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="space-y-4 mx-auto">
            {menuItems}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
