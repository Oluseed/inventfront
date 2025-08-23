import { Outlet } from "react-router-dom"
import Header from "../components/Navbar"
import Footer from "../components/Footer"

export const HomeLayout = () => {
  return (
    <div>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}
