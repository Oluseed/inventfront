import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/home/HeroSection";
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export const HomeLayout = () => {
  return (
    <div>
      <Header />
    <div className="grid 2xl:place-content-center">
      <Navbar/>
      <main>
        <Outlet />
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
};
