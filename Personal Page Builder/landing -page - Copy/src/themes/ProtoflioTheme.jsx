import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import OurProjects from "./components/OurProjects/OurProjects";
import BigToSmallClients from "./components/BigToSmallClients/BigToSmallClients";
import OurServices from "./components/OurServices/OurServices";
import EduAndExp from "./components/EduAndExp/EduAndExp";
import ProjectInMind from "./components/ProjectInMind/ProjectInMind";
import SectionGoodNews from "./components/sectionGoodNews/SectionGoodNews";
import Footer from "./components/Footer/Footer";

const ProtoflioTheme = () => {
  return (
    <div className="">
      <div className="container max-w-screen-xl mx-auto px-4">
        <Navbar />
        <Header />
      </div>
      <OurProjects />

      <BigToSmallClients />
      <OurServices />
      <EduAndExp />
      <ProjectInMind />
      <SectionGoodNews />
      <Footer />
    </div>
  );
};

export default ProtoflioTheme;
