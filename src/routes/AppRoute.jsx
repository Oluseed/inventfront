// Routes 
import { Routes, Route } from "react-router-dom";
import { HomeLayout } from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import About from "../pages/About";
import { Contact } from "../pages/Contact";
import { Product } from "../pages/Product";
import { Shop } from "../pages/Shop";
import ScrollToTop from "../components/ScrollToTop";

export const AppRoute = () => {
  return (
    <>
      <ScrollToTop/>
      <Routes>
        {/* Route in the HomeLayout */}
        <Route path="/" element={<HomeLayout/>}>
          <Route index element={<Home/>}/>
          <Route path={"pricing"} element={<Pricing/>}/>
          <Route path={"about"} element={<About/>}/>
          <Route path={"contact"} element={<Contact/>}/>
          <Route path={"product"} element={<Product/>}/>
          <Route path={"shop"} element={<Shop/>}/>
        </Route>
        {/* Invalid pages */}
        <Route path="*" element={<div>Not Found</div>}/>
      </Routes>
    </>
    
  )
}
