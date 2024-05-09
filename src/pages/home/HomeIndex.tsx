import Container from "@/components/ui/Container";
import Banner from "./Banner";
import ReliefGoodsContainer from "../reliefGoods/ReliefGoodsContainer";
import Testimonial from "../testimonial/Testimonial";
import AboutIndex from "../aboutUs/AboutIndex";
import Gallery from "../Gallery";

const HomeIndex = () => {
  return (
    <Container className="pt-20 md:pt-24">
      <Banner />
      <ReliefGoodsContainer />
      <Testimonial />
      <Gallery />
      <AboutIndex />
    </Container>
  );
};

export default HomeIndex;
