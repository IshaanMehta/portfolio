import React from "react";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

const Project = ({ title, subTitle, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center text-center items-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{subTitle}</p>
        <a
          href={link}
          target="_blank"
          className="mt-5 font-semibold"
          rel="noreferrer"
        >
          Visit
        </a>
      </div>
      <img src={`../assets/${projectTitle}.png`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          I have passion for building websites, animations and creating
          intuitive, dynamic user experiences. Here are few of my projects I
          have created.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title="Project 1"
            subTitle="Explore as a cat in a fully interactive 3D game developed using React & Spline"
            link="https://spline-game.vercel.app/"
          />
          <Project
            title="Project 2"
            subTitle="DevConnector: A social media exclusively for Developers"
            link="https://github.com/IshaanMehta/DevConnector"
          />

          {/* Row 2 */}
          <Project
            title="Project 3"
            subTitle="Improve recording & managing your expenses using the Expense Tracker built on MERN stack"
            link="https://github.com/IshaanMehta/expense-tracker"
          />
          <Project
            title="Project 4"
            subTitle="Lyrical: Find lyrics of your favourite song through lyrical that uses MusixMatch api's in a React framework"
            link="https://github.com/IshaanMehta/lyrics-finder"
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
