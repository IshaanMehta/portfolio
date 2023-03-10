/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full 
      gap16 py-30"
    >
      {/* Image Section */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-16 before:-left-20 before:rounded-t-[400px]
            before:w-11/12 before:max-w-[400px] md:before:max-w-[400px] before:h-full before:h before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              className="rounded-t-[400px] saturate-100 hover:filter hover:saturate-200 transition duration-500 z-10 w-10/12 max-w-[400px]
            md:max-w-[400px]"
              alt="profile-picture"
              src="assets/profile-pic.jpg"
            />
          </div>
        ) : (
          <img
            className="rounded-t-[400px] saturate-100 hover:filter hover:saturate-200 transition duration-500 z-10 w-10/12 max-w-[400px]
            md:max-w-[400px]"
            alt="profile-picture"
            src="assets/profile-pic.jpg"
          />
        )}
      </div>

      {/* Main Section */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Ishaan {""}
            <span className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]">
              Mehta
            </span>
          </p>
          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            I'm a Fullstack web developer. I like to code things from scratch,
            and enjoy bringing ideas to life in the browser.
          </p>
        </motion.div>

        {/* Call To Actions */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 px-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10">
              Let's talk
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
