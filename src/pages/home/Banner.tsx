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

const animateBanner = {
  hidden: {
    scale: 0.7,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const BannerSection = () => {
  return (
    <motion.div
      variants={animateBanner}
      initial="hidden"
      animate="visible"
      style={{
        boxShadow:
          "10px 0px 15px -7px rgba(0, 0, 0, 0.5), -10px 0px 15px -7px rgba(0, 0, 0, 0.5)",
      }}>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}>
        <CarouselContent>
          {bannerImages?.map((image) => (
            <CarouselItem key={image.id}>
              <div className="relative">
                <img
                  className="w-full h-[135px] md:h-full mx-auto"
                  src={image.img}
                  alt={`Slide ${image.id}`}
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
                  <h2 className="text-xl font-bold">asdfasdfasdf</h2>
                  <p className="text-sm">dfgdjefgjdgfj</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </motion.div>
  );
};

export default BannerSection;
