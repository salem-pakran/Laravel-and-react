import React, { useEffect } from "react";
import NavbarDash from "../components/NavbarDash";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Layers - Dashboard";
  }, []);

  return (
    <section className=" bg-gray-dark h-screen">
    <div className="container max-w-screen-xl mx-auto px-4">
      <NavbarDash />
      <Outlet />
    </div>
    </section>

  );
};

export default Dashboard;
