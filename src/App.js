import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='bg-gradient-to-l from-[#000428] via-[#0f172a] to-[#004e92] overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
