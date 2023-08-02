import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-5xl text-accent">Experience</h2>
            <h3 className="h2 text-xl mb-4 text-gradient">
              Federation of Accouting Professions{" "}
              <span className="font-thai">(สภาวิชาชีพบัญชี)</span>
            </h3>
            <div className="backdrop-blur-sm bg-white/30 rounded-full text-center lg:px-3 w-full lg:w-2/4">
              <h3 className="h3 mb-4 text-gradient">2016 - Present</h3>
            </div>
            <div className="flex flex-col  mb-12">
              <p className="h3 text-xl">
                Job Title:{" "}
                <span className="text-gradient text-3xl">
                  General Registration Section
                </span>{" "}
                <span className="font-thai">(ส่วนงานทะเบียน)</span>
              </p>
              <p className="h3 text-xl font-thai">
                ดูแลในส่วนของสมาชิก สมัครใหม่/ต่ออายุ,ให้บริการหน้าเคาน์เตอร์
                และงานอื่นๆที่ได้รับมอบหมาย
              </p>
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
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mt-[8rem] hidden lg:block bg-exp bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
