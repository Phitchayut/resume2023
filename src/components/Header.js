import React from "react";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
            <a href="#">
              <div className="flex flex-col justify-center">
                <h1 className="text-[2rem] font-bold text-gradient btn-link">Beam</h1>
                <p className='text-[2rem]'>Phitchayut</p>
              </div>
            </a>
          {/* button */}
          <button className="btn btn-sm">Contact Me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
