import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.jpg";

const Work = () => {
  return (
    <section id="work">
      <div className="container mx-auto mt-10">
        <div className="flex flex-col lg:flex-row gap-x-10 items-center">
          <div className="flex-1 flex flex-col gap-y-12 mb-12 lg:mb-0">
            <div>
              <h2 className="h2 text-5xl leading-tight text-accent text-center lg:text-left">
                My Projects
              </h2>
              <p className="max-w-md mb-5 font-thai">
                การ Design ส่วนใหญ่จะเป็นการใช้ React + TailwindCss
                ส่วนการทำเป็นระบบ จะใช้ PHP เป็นหลัก ปัจจุบันกำลังศึกษาการทำระบบ
                แบบใช้ Javascript ทั้งหมด เช่น MERN Stack เป็นต้น <br />{" "}
                และหากมีเทคโนโลยีใหม่ๆ เข้ามาก็จะศึกษาไปเรื่อยๆ
              </p>
              <button className="btn btn-sm">
                <a href="https://github.com/Phitchayut" target="blank">
                  View All Project
                </a>
              </button>
            </div>
            <a href="https://zfxsdx.csb.app/" target="blank">
              <div className="w-full h-[350px] lg:w-[500px] lg:h-[350px] group relative overflow-hidden border-2 border-white/50 rounder-xl cursor-pointer">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  className="group-hover:scale-125 transition-all duration-500 w-full h-full object-cover"
                  src={Img1}
                  alt=""
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">UX/UI Design</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Home Page</span>
                </div>
              </div>
            </a>
          </div>
          <div className="flex-1 flex flex-col gap-y-10 mt-8 items-center">
            <a
              href="https://cheerful-blancmange-4d77d6.netlify.app/"
              target="blank"
            >
              <div className="w-full h-[350px] lg:w-[500px] lg:h-[350px] group relative overflow-hidden border-2 border-white/50 rounder-xl cursor-pointer">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  className="group-hover:scale-125 transition-all duration-500 w-full h-full object-cover"
                  src={Img2}
                  alt=""
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">UX/UI Design</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Landing Page</span>
                </div>
              </div>
            </a>
            <a href="https://manage-product.000webhostapp.com/" target="blank">
              <div className="w-full h-[350px] lg:w-[500px] lg:h-[350px] group relative overflow-hidden border-2 border-white/50 rounder-xl cursor-pointer">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  className="group-hover:scale-125 transition-all duration-500 w-full h-full object-cover"
                  src={Img3}
                  alt=""
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-[10rem] transition-all duration-500 z-50">
                  <span className="text-3xl text-white">User: Admin</span>{" "}
                  <br />
                  <span className="text-3xl text-white">Password: 12345</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">Full Stack with PHP</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Manage Product</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
