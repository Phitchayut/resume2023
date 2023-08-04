import React from "react";
import Profile2 from "../assets/profile2.png";
import { FaGithub, FaFacebook, FaLine, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import { Link } from "react-scroll";
import ResumePdf from "../assets/resume.pdf";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col-reverse items-center gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left absolute lg:static z-20 bottom-40 lg:bottom-0">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[100px]"
            >
              BEAM <span>PHITCHAYUT</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[55px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4 text-white">I am a</span>
              <TypeAnimation
                sequence={["Front-end", 2000, "Developer", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0 text-accent text-[36px] lg:text-[55px]"
            >
              Never Stop Learning.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
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
            </motion.div>
            {/* social */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://github.com/Phitchayut" target="blank">
                <FaGithub />
              </a>
              <a href="https://www.facebook.com/beam.phitchayut/">
                <FaFacebook />
              </a>
              <a href="https://line.me/ti/p/g97CJh6wkQ">
                <FaLine />
              </a>
              <a href="https://www.instagram.com/phitchayutbeam/">
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          {/* Image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lg:flex flex-1 max-w-[320px] lg:max-w-[500px] relative lg:static -top-40 lg:top-0 z-10"
          >
            <img src={Profile2} alt="" className="opacity-50 lg:opacity-100" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
