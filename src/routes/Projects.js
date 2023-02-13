import React from "react";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";
import PriceCard from "../components/PriceCard";
import WorkCard from "../components/WorkCard";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS" text="Some of my most recent works" />
      <WorkCard />
      <PriceCard />
      <Footer />
    </div>
  );
};

export default Projects;
