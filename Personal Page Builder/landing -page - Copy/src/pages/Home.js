import React, { useEffect } from "react";
import Header from "../components/Header";
import Features from "../components/Features";
import CreateSite from "../components/CreateSite";
import BuiltTemplate from "../components/BuiltTemplate";

const Home = () => {
  useEffect(() => {
    document.title = "Layers - Home";
  }, []);

  return (
    <div className=" bg-gray-dark">
      <Header />
      <Features />
      <CreateSite />
      <BuiltTemplate />
    </div>
  );
};

export default Home;
