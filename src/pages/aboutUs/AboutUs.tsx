import about from "../../assets/about.jpg";

const AboutUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 lg:gap-20 mb-16">
      <div className="md:flex md:justify-center md:order-1">
        <img className="rounded-xl" src={about} alt="" />
      </div>
      <div className="md:flex md:flex-col md:justify-center md:order-2">
        <h4 className="mb-4 text-popover">About Us</h4>
        <p className="text-justify text-xl">
          <span className="text-yellow-500text-2xl"> Unity Uplift</span> is
          dedicated to streamlining relief goods distribution post-disasters.
          Our team comprises logistics experts, engineers, and humanitarian
          specialists committed to efficient aid delivery and building
          resilience in affected communities.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
