import React from "react";
import { SkillsList } from "../Data";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Skills = () => {
  return (
    <section
      className="py-8 lg:py-24 lg:h-screen container mx-auto"
      id="skills"
    >
      <motion.h1
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center mb-8 h2 text-5xl text-accent"
      >
        Skills
      </motion.h1>
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 text-center capitalize"
      >
        <div className="border-0 lg:border-r-4 lg:border-indigo-500/75">
          <h1 className="h3 text-3xl text-gradient">Front-end</h1>
          <p className="text-gray-400 font-semibold text-xl tracking-wide italic">
            Basic
          </p>
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-wrap justify-center items-center text-center  text-zinc-200"
          >
            {SkillsList.frontend.basic.map((item, index) => (
              <div className="text-center p-3" key={index}>
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  src={item.img}
                  alt=""
                  className="w-[4.5rem] h-[4.5rem] p-2"
                />
                <p className="text-center">{item.name}</p>
              </div>
            ))}
          </motion.div>
          <p className="text-gray-400 font-semibold text-xl tracking-wide italic">
            Framework/Library
          </p>
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-wrap items-center justify-center text-center text-zinc-200"
          >
            {SkillsList.frontend.framework.map((item, index) => (
              <div className="text-center p-3" key={index}>
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  src={item.img}
                  alt=""
                  className="w-[4.5rem] h-[4.5rem] p-2"
                />
                <p className="text-center">{item.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
        {/* end-fontend */}
        <div className="">
          <div className="h3 text-3xl text-gradient">Back-end</div>
          <p className="text-gray-400 font-semibold text-xl tracking-wide italic">
            Basic
          </p>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-wrap justify-center items-center text-center  text-zinc-200"
          >
            {SkillsList.backend.lang.map((item, index) => (
              <div className="text-center p-3" key={index}>
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  src={item.img}
                  alt=""
                  className="w-[4.5rem] h-[4.5rem] object-cover p-2"
                />
                <p className="text-center">{item.name}</p>
              </div>
            ))}
          </motion.div>
          <p className="text-gray-400 font-semibold text-xl tracking-wide italic">
            Database
          </p>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-wrap items-center justify-center text-center text-zinc-200"
          >
            {SkillsList.backend.database.map((item, index) => (
              <div className="text-center p-3" key={index}>
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  src={item.img}
                  alt=""
                  className="w-[4.5rem] h-[4.5rem] object-cover p-2"
                />
                <p className="text-center">{item.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
        {/* end-backend */}
        <div className="border-0 lg:border-l-4 lg:border-indigo-500/75">
          <div className="h3 text-3xl text-gradient">Others</div>
          <p className="text-gray-400 font-semibold text-xl tracking-wide italic">
            Basic
          </p>
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-wrap justify-center items-center text-center text-zinc-200"
          >
            {SkillsList.other.app.map((item, index) => (
              <div className="text-center p-3" key={index}>
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  src={item.img}
                  alt=""
                  className="w-[4.5rem] h-[4.5rem] p-2"
                />
                <p className="text-center">{item.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
