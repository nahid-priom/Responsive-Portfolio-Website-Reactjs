import React from "react";
import Footer from "../components/Footer";
import HeroImg from "../components/HeroImg";
import Navbar from "../components/Navbar";
import WorkCard from "../components/WorkCard";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <WorkCard />
      <Footer />
    </div>
  );
};

export default Home;
