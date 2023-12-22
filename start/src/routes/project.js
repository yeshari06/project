import React from 'react'
import NavBar from "./components/navbar";
import HeroImg2 from './components/heroimg2';
import Footer from "./components/footer";
import WorkCard from './components/workcard';

function Project(){
  return (
    <>
      <NavBar />
      <HeroImg2 heading='PROJECTS' text="some of my most recent work" />
      <WorkCard/>
      <Footer />
    </>
  );
}

export default Project