import React from 'react';
import {BiHomeAlt,BiUser} from 'react-icons/bi'
import {FaBookReader} from 'react-icons/fa'
import {BsClipboardData,BsBriefcase,BsChatSquare,BsPersonWorkspace} from 'react-icons/bs'
import {GiSkills} from 'react-icons/gi'
import {Link} from 'react-scroll'

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 backdrop-blur-2xl h-[96px] rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          <Link to='home' activeClass="active" spy={true} smooth={true} offset={-200} className="flex justify-center items-center cursor-pointer h-[60px]">
            <BiHomeAlt />
          </Link>
          <Link to='about' activeClass="active" spy={true} smooth={true} className="flex justify-center items-center cursor-pointer h-[60px]">
            <BiUser />
          </Link>
          <Link to='experience' activeClass="active" spy={true} smooth={true} className="flex justify-center items-center cursor-pointer h-[60px]">
            <BsPersonWorkspace />
          </Link>
          <Link to='education' activeClass="active" spy={true} smooth={true} className="flex justify-center items-center cursor-pointer h-[60px]">
            <FaBookReader />
          </Link>
          <Link to='skills' activeClass="active" spy={true} smooth={true} className="flex justify-center items-center cursor-pointer h-[60px]">
            <GiSkills />
          </Link>
          <Link to='work' activeClass="active" spy={true} smooth={true} className="flex justify-center items-center cursor-pointer h-[60px]">
            <BsBriefcase />
          </Link>
          <Link to='contact' activeClass="active" spy={true} smooth={true} className="flex justify-center items-center cursor-pointer h-[60px]">
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  )
};

export default Nav;
