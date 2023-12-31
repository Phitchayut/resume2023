import React from "react";

const Footer = () => {
  return (
    <section className="container mx-auto h-[60vh] lg:h-[40vh] px-5 mt-5">
      <h1 className="text-center h2 text-3xl lg:text-5xl text-accent">
        Design With
      </h1>
      <div className="flex flex-col lg:flex-row justify-center text-center border rounded-xl">
        <div className="flex-1 w-full border-b lg:border-b-0 lg:border-r-2 p-5">
          <h1 className="h4 text-xl text-gradient">Main</h1>
          <ul>
            <li>React Js</li>
            <li>Tailwind Css</li>
          </ul>
        </div>
        <div className="flex-1 w-full p-5">
          <h1 className="h4 text-xl text-gradient">Library</h1>
          <ul className="capitalize grid grid-cols-2 lg:grid-cols-3">
            <li>framer motion</li>
            <li>react icons</li>
            <li>react scroll</li>
            <li>react countup</li>
            <li>react type animation</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
