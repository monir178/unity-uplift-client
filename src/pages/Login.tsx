import Container from "@/components/ui/Container";
import { useFadeIn } from "@/hooks/useFadeIn";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <motion.div variants={useFadeIn()} initial="hidden" animate="visible">
      <Container className="pt-12 md:pt-28 lg:pt-32">
        <div className="flex justify-center items-center">
          <div className="bg-gray-100 rounded-lg shadow-lg w-96 p-7">
            <h2 className="text-xl pt-0 text-popover  mb-4 text-center font-bold">
              Login
            </h2>
            <form className="flex flex-col gap-y-3">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  placeholder="Enter email"
                  type="email"
                  className="input input-bordered w-full max-w-xs border rounded-sm border-1 bg-gray-100 mt-1 border-opacity-65 p-1 focus:border-gray-200 focus:ring-gray-500"
                  autoComplete="username"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>
                <input
                  placeholder="Enter password"
                  type="password"
                  autoComplete="current-password"
                  className="input input-bordered w-full max-w-xs border rounded-sm border-1 bg-gray-100 mt-1 border-opacity-65 p-1 focus:border-gray-200 focus:ring-gray-500"
                />
              </div>

              <Button
                className="mt-4 w-full text-[17px] bg-popover"
                type="submit">
                Log In
              </Button>
              <div></div>
            </form>

            <form>
              <button type="submit" className=" text-primary hover:underline">
                Forgot password?
              </button>
            </form>

            <p className="mt-3 font-semibold">
              New In This Platform? &nbsp;
              <Link className="text-popover text-sm underline" to="/register">
                Create New Account
              </Link>
            </p>
            <hr className=" border-black my-4" />
            <Button className=" w-full text-white text-[17px] hover:shadow- bg-red-500 hover:bg-red-600">
              <FaGoogle className="size-6 mr-3 " /> Sign Up with Google
            </Button>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Login;
