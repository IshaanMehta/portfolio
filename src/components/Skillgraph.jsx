import React, { useEffect } from "react";
import { motion } from "framer-motion";
import LineGradient from "./LineGradient";
import "../scss/styles.scss";

const Skillgraph = () => {
  useEffect(() => {
    window["graph"]();
  });
  return (
    <div>
      <motion.div
        className="md:w-1/3 mb-10"
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
          TECHNICAL <span className="text-yellow">SKILLS</span>
        </p>
        <LineGradient width="w-2/4" />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        }}
      >
        <div className="holder">
          <div className="bar cf" data-percent="85%">
            <span className="label">React</span>
          </div>
          <div className="bar cf" data-percent="80%">
            <span className="label light">Nodejs</span>
          </div>
          <div className="bar cf" data-percent="80%">
            <span className="label">MongoDb</span>
          </div>
          <div className="bar cf" data-percent="90%">
            <span className="label light">HTML</span>
          </div>
          <div className="bar cf" data-percent="75%">
            <span className="label">CSS</span>
          </div>
          <div className="bar cf" data-percent="90%">
            <span className="label light">REST api</span>
          </div>
          <div className="bar cf" data-percent="85%">
            <span className="label light">Git</span>
          </div>
          <div className="bar cf" data-percent="80%">
            <span className="label">Express-js</span>
          </div>
          <div className="bar cf" data-percent="80%">
            <span className="label light">JavaScript</span>
          </div>
          <div className="bar cf" data-percent="70%">
            <span className="label">Tailwind</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skillgraph;
