import React from 'react';
import HeroSection from "../components/HeroSection";
import ImproveSection from "../components/ImproveSection";
import QouteSection from "../components/QouteSection";
import ChiefsSection from "../components/ChiefsSection";

const Home = () => {
  return (
    <div className="container main">
        <HeroSection/>
        <ImproveSection/>
        <QouteSection/>
        <ChiefsSection/>
      </div>
  )
}

export default Home