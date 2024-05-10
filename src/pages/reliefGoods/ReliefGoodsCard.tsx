import { Button } from "@/components/ui/button";
import { useFadeIn } from "@/hooks/useFadeIn";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const ReliefGoodsCard = ({ itemName, _id, category, img, amount }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={useFadeIn()}
      initial="hidden"
      animate="visible"
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
        <motion.img
          whileHover="hover"
          src={img}
          className="h-44 md:h-60 w-full  rounded-t-xl mb-4 mx-auto"
          alt="here will be dynamic title"
        />
        <div className="p-4">
          <h3 className="text-gray-700  mb-1 truncate ">{itemName}</h3>
          <p className="text-primary font-bold text-lg truncate ">{category}</p>
          <p className="text-primary font-bold  text-lg truncate ">{amount}</p>
        </div>

        <Link to={`/relief-goods/${_id}`}>
          <div className="flex tracking-wider">
            <Button className="rounded-none w-full bg-popover hover:bg-popover-foreground  tracking-widest text-md font-bold">
              VIEW DETAILS
            </Button>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default ReliefGoodsCard;
