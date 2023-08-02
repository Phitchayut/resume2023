import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#">
            <div className="flex flex-col justify-center">
              <h1 className="text-[2rem] font-bold text-gradient btn-link">
                Beam
              </h1>
              <p className="text-[2rem]">Phitchayut</p>
            </div>
          </a>
          {/* button */}
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            className="flex justify-center items-center cursor-pointer h-[60px]"
          >
            <button className="btn btn-lg">Contact Me</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
