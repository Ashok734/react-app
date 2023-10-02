import { Outlet } from "react-router-dom";
import Navbar from "../Navbar"
// import Home from "./Home";



const Layout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
      
    </>
  );
}

export default Layout
