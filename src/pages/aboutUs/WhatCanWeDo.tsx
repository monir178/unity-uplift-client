import what from "../../assets/what.jpg";

const WhatCanWeDo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 lg:gap-20">
      <div className="md:flex md:justify-center md:order-2">
        <img
          className="rounded-xl border-2 border-text-popover"
          src={what}
          alt=""
        />
      </div>
      <div className="md:flex md:flex-col md:justify-center md:order-1">
        <h4 className="mb-4 text-popover">What We Do:</h4>
        <p className="text-justify text-xl">
          We oversee the supply chain of emergency aid materials, ensuring
          efficient procurement, storage, and distribution to affected areas.
          Our expertise in logistics enables us to optimize delivery routes and
          minimize delays, ensuring that relief goods reach communities in need
          promptly.
        </p>
      </div>
    </div>
  );
};

export default WhatCanWeDo;
