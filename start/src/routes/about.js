import React from 'react'
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import HeroImg2 from './components/heroimg2';
import AboutContent from "./components/aboutcontent";
import Resume from './components/resume';

function About () {
  return (
    <>
      <NavBar />
      <HeroImg2 heading="ABOUT" text="Im a friendly front-end developer" />
      <Resume/>
      <AboutContent />
      <Footer />
    </>
  );
}

export default About