import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { bannerImages } from "./BannerContent";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const animateBannerContainer = {
  hidden: {
    opacity: 0,
  },

  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.9,
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const animateBannerChildren = {
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

const animateButton = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      type: "spring",
      ease: "linear",
      scale: {
        repeat: Infinity,
        duration: 1,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};

const BannerSection = () => {
  return (
    <motion.div
      variants={animateBannerContainer}
      initial="hidden"
      animate="visible"
      style={{
        boxShadow:
          "10px 0px 15px -7px rgba(0, 0, 0, 0.5), -10px 0px 15px -7px rgba(0, 0, 0, 0.5)",
      }}>
      <div className="relative">
        <motion.div
          variants={animateBannerContainer}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 z-10">
          <motion.h1
            variants={animateBannerChildren}
            className="text-lg md:text-5xl font-bold text-center mb-0 md:mb-3 text-yellow-500">
            Welcome to Unity Uplift
          </motion.h1>
          <motion.p
            variants={animateBannerChildren}
            className="text-[9px] md:text-lg text-center w-9/12 mx-auto text-gray-300">
            Our platform provides a comprehensive solution for organizing,
            tracking, and delivering relief goods efficiently and effectively,
            ensuring that aid reaches the right people at the right time.
            Together, let's make a positive impact and uplift communities in
            need.
          </motion.p>

          <motion.div variants={animateBannerChildren}>
            <motion.div
              variants={animateButton}
              initial="hidden"
              animate="visible">
              <Button className="bg-yellow-500 px-3 py-1 md:px-10 text-[10px]  font-bold hover:bg-yellow-700 md:text-xl h-5 mt-2 md:mt-4 md:py-6">
                Donate Now
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}>
          <CarouselContent>
            {bannerImages?.map((image) => (
              <CarouselItem key={image.id}>
                <img
                  className="w-full h-[135px] md:h-full mx-auto"
                  src={image.img}
                  alt={`Slide ${image.id}`}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="z-20" />
          <CarouselNext className="z-20" />
        </Carousel>
      </div>
    </motion.div>
  );
};

export default BannerSection;
