import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/home/HeroSection";

export const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="grid 2xl:place-content-center">
        <main>
          <Outlet />
          <HeroSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};