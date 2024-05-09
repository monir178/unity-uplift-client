import Container from "@/components/ui/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonialData } from "./testimonialData";

const Testimonial = () => {
  return (
    <Container className="my-24 max-w-[1440px]">
      <h1 className="mb-14 ms-0 xl:ms-[80px]">What Our Client Said About Us</h1>
      <Carousel className="w-full">
        <CarouselContent className="p-4 ms-0 xl:ms-[80px] flex gap-10">
          {testimonialData.map((client, index) => (
            <CarouselItem
              style={{
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              }}
              key={index}
              className="p-8 rounded-3xl bg-gray-100 transition-all  md:basis-3/5 lg:basis-2/5">
              <div className="flex  items-center gap-4 mb-10 ">
                <img
                  className="rounded-full size-14"
                  src={client.img}
                  alt={client.title}
                />
                <div>
                  <h3>{client.name}</h3>
                  <p>{client.title}</p>
                </div>
              </div>
              <p>{client.description}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Container>
  );
};

export default Testimonial;
