import Container from "@/components/ui/Container";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetSingleReliefQuery } from "@/redux/api/api";
import { useParams } from "react-router-dom";

export type TTitem = {
  itemName: string;
  category: string;
  img: string;
  description: string;
  amount: string;
};

const SingleReliefDetails = () => {
  const { id } = useParams();

  const { data: singleRelief, error, isLoading } = useGetSingleReliefQuery(id);

  if (isLoading) {
    return (
      <Container className="pt-32 flex justify-center">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </Container>
    );
  }

  if (error) {
    return <div>And Error Occurred</div>;
  }

  return (
    <Container className="pt-20 md:pt-32">
      <h1>Details of {singleRelief?.data.itemName}</h1>
      <div className=" mx-auto w-full lg:w-5/6 rounded-2xl">
        <div>
          <img
            className="w-full rounded-xl"
            src={singleRelief?.data.img}
            alt=""
          />
        </div>
        <h2 className="card-title font-bold my-4">
          {singleRelief?.data.itemName}
        </h2>
        <p>
          <span className="font-bold"> Category:</span>{" "}
          {singleRelief?.data.category}
        </p>
        <p>
          <span className="font-bold">Amount: </span>{" "}
          {singleRelief?.data.amount}
        </p>
        <p className="my-4">
          <span className="font-bold">description:</span>{" "}
          {singleRelief?.data.description}
        </p>

        <Button className="bg-popover hover:bg-popover-foreground text-lg font-semibold px-10 py-6  tracking-widest">
          Donate Now
        </Button>
      </div>
    </Container>
  );
};

export default SingleReliefDetails;
