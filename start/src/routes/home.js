import React from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import HeroImg from "./components/heroimg";
import WorkCard from "./components/workcard";
import AboutContent from "./components/aboutcontent";
import Resume from "./components/resume";

function Home(){
    return (
      <>
        <NavBar />
        <HeroImg />
        <WorkCard />
        <Resume />
        <AboutContent />
        
        <Footer />
      </>
    );
}

export default Home