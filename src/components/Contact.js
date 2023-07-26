import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <div class="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br />
                together!
              </h2>
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
