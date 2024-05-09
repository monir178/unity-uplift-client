import Container from "@/components/ui/Container";
import ReliefGoodsCard from "./ReliefGoodsCard";
import { Button } from "@/components/ui/button";
import { useGetLimitedReliefsQuery } from "@/redux/api/api";
import CustomLoading from "@/components/ui/CustomLoading";
import { Link } from "react-router-dom";

const ReliefGoodsContainer = () => {
  const {
    data: limitedReliefs,
    isError,
    isLoading,
  } = useGetLimitedReliefsQuery(undefined);

  if (isLoading) {
    return (
      <Container className="pt-24">
        <CustomLoading />
      </Container>
    );
  }

  if (isError) {
    return <p>Oops! An Error occurred.</p>;
  }

  return (
    <Container className="my-6 md:my-14 ">
      <h1 className="text-popover tracking-wide uppercase text-center mb-4 md:mb-10">
        Relief Goods
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-14   ">
        {limitedReliefs?.data?.map((ReliefItem) => (
          <ReliefGoodsCard
            {...ReliefItem}
            key={ReliefItem._id}></ReliefGoodsCard>
        ))}
      </div>
      <div className="mt-8 md:mt-14 flex justify-center">
        <Link to="/relief-goods">
          <Button className="bg-popover hover:bg-popover-foreground text-2xl font-semibold px-14 md:px-52 py-3 md:py-8 tracking-widest">
            View All
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default ReliefGoodsContainer;
