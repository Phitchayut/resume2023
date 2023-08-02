import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from 'react-scroll'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mt-[8rem] hidden lg:block bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-5xl text-accent">About Me</h2>
            <h3 className="h3 mb-4">
              I'm a Front-end Developer.
            </h3>
            <div className="flex flex-col  mb-12">
              <p className="h3 text-xl">My Name is: <span className="text-gradient text-3xl">Phitchayut Chanpherng</span></p>
              <p className="h3 text-xl">Nick Name: <span className="text-gradient text-3xl">Beam</span></p>
              <p className="h3 text-xl">My Birth date: <span className="text-gradient text-3xl">10 November 1995</span></p>
              <h1 className="h2 text-5xl text-gradient">{inView ? <CountUp start={0} end={28} duration={3} /> : null} <span className="text-lg">Year Old</span></h1>
            </div>
            <div className="flex justify-center lg:justify-start gap-x-8 items-center">
              <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            className="flex justify-center items-center cursor-pointer h-[60px]"
          >
            <button className="btn btn-lg">Hire Me</button>
          </Link>
              <a href="#" className="text-gradient btn-link">
                Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
