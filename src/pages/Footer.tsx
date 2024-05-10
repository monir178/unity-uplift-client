import Container from "@/components/ui/Container";
import { Euro, Globe, PersonStanding } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <Container className=" bg-popover w-full mx-auto pb-10 text-white font-thin">
        <footer className="mt-12 grid grid-cols-2 md:grid-cols-3 justify-self-end lg:grid-cols-5 py-10 gap-y-16">
          <div>
            <div className="flex justify-between items-center">
              <img className="size-24" src={logo} alt="" />
              <div>
                <h5 className="font-semibold mb-2">Product</h5>
                <ul className="list-none font-thin space-y-2">
                  <li>
                    <small>Pricing</small>
                  </li>
                  <li>
                    <small>Overview</small>
                  </li>
                  <li>
                    <small>Browse</small>
                  </li>
                  <li>
                    <small>Accessibility</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" justify-self-center">
            <h5 className="font-semibold mb-2">Solutions</h5>
            <ul className="list-none font-thin space-y-2">
              <li>
                <small>Brainstorming</small>
              </li>
              <li>
                <small>Ideation</small>
              </li>
              <li>
                <small>Wireframing</small>
              </li>
              <li>
                <small>Research</small>
              </li>
            </ul>
          </div>
          <div className=" justify-self-center">
            <h5 className="font-semibold mb-2">Resources</h5>
            <ul className="list-none font-thin space-y-2">
              <li>
                <small>HelpCenter</small>
              </li>
              <li>
                <small>Blog</small>
              </li>
              <li>
                <small>Tutorials</small>
              </li>
              <li>
                <small>FAQs</small>
              </li>
            </ul>
          </div>
          <div className=" justify-self-center">
            <h5 className="font-semibold mb-2">Support</h5>
            <ul className="list-none font-thin space-y-2">
              <li>
                <small>Contact Us</small>
              </li>
              <li>
                <small>Developers</small>
              </li>
              <li>
                <small>Documentation</small>
              </li>
              <li>
                <small>Integrations</small>
              </li>
            </ul>
          </div>
          <div className=" justify-self-center">
            <h5 className="font-semibold mb-2">Company</h5>
            <ul className="list-none font-thin space-y-2">
              <li>
                <small>About</small>
              </li>
              <li>
                <small>Press</small>
              </li>
              <li>
                <small>Events</small>
              </li>
              <li>
                <small>Request Demo</small>
              </li>
            </ul>
          </div>
        </footer>
        <hr className="my-4 border-gray-500" />

        <div className="flex flex-col-reverse md:flex-row justify-between">
          <div className="md:text-right mb-4 md:mb-0">
            <small> @ 2024. All rights reserved.</small>
          </div>
          <div className="flex flex-wrap justify-between gap-6">
            <small>Terms</small>
            <small>Privacy</small>
            <small>Contact</small>
            <div className="flex gap-2">
              <Globe /> <small>EN</small>
            </div>
            <div className="flex gap-2">
              <Euro /> <small>EUR</small>
            </div>
            <PersonStanding />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Footer;
