import React from "react";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Skill from "../components/Skill";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills">
      {/* Header and Image section */}
      <div className="md:flex md:justify-between md:gap-16">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Following are the few of my interpersonel skills.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
            before:w-full before:h-full before:h before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                className="z-10"
                alt="skills"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img className="z-10" alt="skills" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* Skills */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        <Skill
          id="01"
          heading="Team Player"
          text="A strong believer of the quote 'Talent wins games, but teamwork and intelligence win championships.' as it is crucial to growth and self-development."
          delay="0"
          color="bg-blue"
        />

        <Skill
          id="02"
          heading="Time Mangement"
          text="Efficient in planning and managing my work/tasks accordingly so to achieve maximum productivity."
          delay="0.2"
          color="bg-red"
        />

        <Skill
          id="03"
          heading="Problem Solver"
          text="Always percieved every challenging situation as an oppurtunity to grow and learn more skills rather than being hopeless to the problem."
          delay="0.4"
          color="bg-yellow"
        />
      </div>
    </section>
  );
};

export default MySkills;
