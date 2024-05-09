import Container from "@/components/ui/Container";
import ReliefGoodsCard from "./ReliefGoodsCard";
import { Button } from "@/components/ui/button";

const ReliefGoodsContainer = () => {
  return (
    <Container className="my-6 md:my-14 ">
      <h1 className="text-popover tracking-wide uppercase text-center mb-4 md:mb-10">
        Relief Goods
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-14   ">
        <ReliefGoodsCard />
        <ReliefGoodsCard />
        <ReliefGoodsCard />
        <ReliefGoodsCard />
        <ReliefGoodsCard />
        <ReliefGoodsCard />
      </div>
      <div className="mt-8 md:mt-14 flex justify-center">
        <Button className="bg-popover text-2xl font-semibold px-14 md:px-52 py-3 md:py-8 tracking-widest">
          View All
        </Button>
      </div>
    </Container>
  );
};

export default ReliefGoodsContainer;
