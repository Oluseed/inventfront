// Routes 
import { Routes, Route } from "react-router-dom";
import { HomeLayout } from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import About from "../pages/About";

export const AppRoute = () => {
  return (
    <Routes>
      {/* Route in the HomeLayout */}
      <Route path="/" element={<HomeLayout/>}>
        <Route index element={<Home/>}/>
        <Route path={"pricing"} element={<Pricing/>}/>
        <Route path={"about"} element={<About/>}/>
      </Route>
      {/* Invalid pages */}
      <Route path="*" element={<div>Not Found</div>}/>
    </Routes>
  )
}
