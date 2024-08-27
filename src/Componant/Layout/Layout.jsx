import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"


const Layout = () => {
  return (
    <>
    <Navbar/>


    <Outlet />






    <div className="p-5 text-white bg-slate-900 text-center">
        <h5 className="text-4xl">Footer</h5>
    </div>
    </>
  )
}

export default Layout