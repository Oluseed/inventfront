import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/home/HeroSection";

export const HomeLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
};
