import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import ResumePdf from "../assets/resume.pdf";
import Profile3 from "../assets/profile3.png";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-y-10 lg:flex-row lg:items-center lg:justify-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:block max-w-[400px] lg:max-w-[500px] lg:h-[640px] mix-blend-lighten mt-0 lg:mt-12 relative lg:static bottom-[3.5rem] lg:top-0 z-10"
          >
            <img src={Profile3} alt="" className="opacity-50 lg:opacity-100" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 absolute lg:static mt-10"
          >
            <div>
              <h2 className="h2 text-5xl text-accent text-center lg:text-left">
                About Me
              </h2>
              <h3 className="h3 mb-4 text-center lg:text-left">
                I'm a Front-end Developer.
              </h3>
              <div className="flex flex-col mb-12 text-center lg:text-left">
                <p className="h3 text-xl">
                  My Name is:{" "}
                  <span className="text-gradient text-[27px] block lg:inline-block">
                    Phitchayut Chanpherng
                  </span>
                </p>
                <p className="h3 text-xl">
                  Nick Name:{" "}
                  <span className="text-gradient text-3xl block lg:inline-block">
                    Beam
                  </span>
                </p>
                <p className="h3 text-xl">
                  My Birth date:{" "}
                  <span className="text-gradient text-3xl block lg:inline-block">
                    10 November 1995
                  </span>
                </p>
                <h1 className="h2 text-5xl text-gradient text-center lg:text-left">
                  {inView ? <CountUp start={0} end={28} duration={3} /> : null}{" "}
                  <span className="text-lg">Year Old</span>
                </h1>
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
                <a
                  href={ResumePdf}
                  download="Resume Download"
                  className="text-gradient btn-link"
                >
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
