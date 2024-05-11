import Container from "@/components/ui/Container";
import { useGetAllReliefsQuery } from "@/redux/api/api";
import ReliefGoodsCard from "./ReliefGoodsCard";
import CustomLoading from "@/components/ui/CustomLoading";
import useScrollToTop from "@/hooks/useScrollToTop";
import { TReliefGoods } from "@/types/releifGoods";

const AllReliefGoods = () => {
  useScrollToTop();
  const {
    data: allReliefs,
    isError,
    isLoading,
  } = useGetAllReliefsQuery(undefined);

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
    <Container className="pt-24">
      <h1>All Relief Goods</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-14">
        {allReliefs?.data?.map((ReliefItem: TReliefGoods) => (
          <ReliefGoodsCard
            {...ReliefItem}
            key={ReliefItem._id}></ReliefGoodsCard>
        ))}
      </div>
    </Container>
  );
};

export default AllReliefGoods;
