import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const ReliefGoodsCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-aos="fade-up"
      className="bg-gray-100 rounded-t-xl"
      style={{
        boxShadow: isHovered
          ? "20px 15px 15px -4px rgba(0, 0, 0, 0.2), -5px 5px 15px -7px rgba(0, 0, 0, 0.2)"
          : "none",
        transition: "all 0.3s ease-in-out",
      }}>
      <div>
        <Link to="/">
          <motion.img
            whileHover="hover"
            src="https://assets.unileversolutions.com/v1/94334634.jpg?im=AspectCrop=(580,435);Resize=(580,435)"
            className="h-44 md:h-60 w-full  rounded-t-xl mb-4 mx-auto"
            alt="here will be dynamic title"
          />
          <div className="p-4">
            <h3 className="text-gray-700  mb-1 truncate ">
              Emergency Food Pack
            </h3>
            <p className="text-primary font-bold text-lg truncate ">
              Food Supplies
            </p>
            <p className="text-primary font-bold  text-lg truncate ">
              10,000 kcal ration pack
            </p>
          </div>
        </Link>

        <Link to="/">
          <div className="flex tracking-wider">
            <Button className="rounded-none w-full bg-popover  hover:bg-opacity-50 tracking-widest text-md font-bold">
              VIEW DETAILS
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ReliefGoodsCard;
