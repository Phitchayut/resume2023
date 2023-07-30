import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const education = [
  {
    name: "Southeast Bangkok College",
    bechelor: "Bechelor of Business Administration, Business Computer",
    year: "2018 - 2020",
    gpa: "3.54"
  },
  {
    name: "Attawit Commercial Technology College",
    bechelor: "High Vocational, Business Computer",
    year: "2014 - 2016",
    gpa: "3.11"
  },
  {
    name: "Hadamara Aksornlak Wittaya School",
    bechelor: "High School, Business Computer",
    year: "2010 - 2014",
    gpa: "3.09"
  },

];

const Education = () => {
  return (
    <section className="section" id="education">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services bg-contain bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-5xl text-accent mb-6">Education</h2>

          </motion.div>
          {/* service */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* service list */}
            <div>
              {education.map((item, index) => (
                <div
                  className="border-b border-white/20 h-[146px] mb-[38px] flex"
                  key={index}
                >
                  <div className="max-w-[476px]">
                    <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                      {item.name}
                    </h4>
                    <p className="font-secondary leading-tight">{item.bechelor}</p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <a
                      href="#"
                      className="mb-[42px] flex justify-center items-center"
                    >
                     GPA {item.gpa}
                    </a>
                    <a href="#" className="text-gradient text-sm">
                      {item.year}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
