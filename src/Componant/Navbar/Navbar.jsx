import { NavLink, useNavigate } from "react-router-dom"
import logo from "./../../assets/images/freshcart-logo.svg"
import { useContext } from "react"
import { authContext } from "../../Context/AuthContext"
import { cartContext } from "../../Context/CartContext"

const Navbar = () => {

 const {token , setToken}= useContext(authContext);
 

 const {numOfItems} = useContext(cartContext)
const navigate = useNavigate()
 function LogOut(){
  setToken(null)
  localStorage.removeItem("tkn")

  navigate("/login")
 }
  return (
    <>
    <nav className="py-4 bg-slate-200">
      <div className="lg:w-[90%] mx-auto lg:flex lg:flex-wrap lg:justify-between lg:items-center ">
      <div className="logo">
        <img src={logo} alt=""  className=" text-center m-auto"/>

</div>

<div className="navlink text-center">
  <ul className=" lg:flex lg:flex-wrap lg:justify-between lg:items-center">
    {token ? <>
      <li className="mt-4 lg:ml-4 ">
      <NavLink to="/">Product</NavLink>
    </li> 

    <li className="mt-4 lg:ml-4 "> 
      <NavLink  to="/brand">Brands</NavLink>
    </li> 

    <li className="mt-4 lg:ml-4 "> 
      <NavLink  to="/Category">Category</NavLink>
    </li>

    <li className="mt-4 lg:ml-4 "> 
      <NavLink  to="/allorders">All orders</NavLink>
    </li>
    
    <li className="mt-4 lg:ml-4 relative "> 
      <NavLink  to="/cart">Cart
      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-green-700 border-2 border-white rounded-full -top-4 -end-4 ">
       {numOfItems}
        </div>

      </NavLink>
    </li>
    
    
    </> : ""}
  </ul>
</div>

<div className="sochial text-center lg:flex lg:flex-wrap lg:justify-between lg:items-center">
  <div className="mt-4">
    <i className="fa-brands lg:ml-3 fa-facebook"></i>
    <i className="fa-brands lg:ml-3 fa-twitter"></i>
    <i className="fa-brands lg:ml-3 fa-instagram"></i>
    <i className="fa-brands lg:ml-3 fa-youtube"></i>
    </div>
    <div className="mt-4" >


      {token ? <button onClick={LogOut}className="ml-3" >LogOut</button> : <>
        <NavLink className="ml-3" to="/login">Login</NavLink>
        <NavLink className="ml-3" to="/register">Register</NavLink>
      </>}

    
    </div>
</div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
