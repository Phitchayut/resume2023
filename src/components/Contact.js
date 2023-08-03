import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Facebook from "../assets/social/facebook.png";
import Line from "../assets/social/line.png";
import Instagram from "../assets/social/instagram.png";
const styleSocial = "w-16 h-16 mb-5 hover:scale-125 duration-300";

const Contact = () => {
  return (
    <section className="py-10 lg:section" id="contact">
      <div class="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <div className="text-center lg:text-left">
              <h4 className="h2 text-5xl leading-tight text-accent text-center lg:text-left">
                Contact Me
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-5">
                Let's work <br />
                together!
              </h2>
              <p className="text-xl font-semibold">
                Tel. :
                <span className="text-gradient text-xl block lg:inline-block">
                  {" "}
                   080-872-5915
                </span>
              </p>
              <p className="text-xl font-semibold">
                Email. :
                <span className="text-gradient text-xl block lg:inline-block">
                  {" "}
                   beam.phitchayut@gmail.com
                </span>
              </p>
              <h2 className="h2 text-gradient mt-3 text-center lg:text-left">
                Social
              </h2>
              <div className="">
                <ul className="flex justify-center lg:flex lg:justify-start space-x-5">
                  <li>
                    <a
                      href="https://www.facebook.com/beam.phitchayut/"
                      target="blank"
                    >
                      <img src={Facebook} className={styleSocial} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://line.me/ti/p/g97CJh6wkQ" target="blank">
                      <img src={Line} className={styleSocial} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/phitchayutbeam/"
                      target="blank"
                    >
                      <img src={Instagram} className={styleSocial} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <form className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-center">
            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Your Name"
            />
            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Your Email"
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your Message"
            ></textarea>
            <button className="btn btn-lg">Send message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
