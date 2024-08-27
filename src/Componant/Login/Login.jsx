import axios from "axios";
import { useFormik } from "formik"
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import * as Yup from 'yup';
import { Bars } from 'react-loader-spinner'
import { useNavigate } from "react-router-dom";
import { authContext } from "../../Context/AuthContext";

const Login = () => {

const [isLoading , setLoading] = useState(false)
const navigate = useNavigate()


const {setToken}= useContext(authContext)
let user ={
    email: "",
    password: "",


  };

  const validation = Yup.object().shape({

    email: Yup.string()
    .required("Email is Required")
    .email("Enter Valide Email"),

    password: Yup.string()
    .required("Password is Required")
    .matches(/^[A-Z][a-z0-9]{4,10}$/ , "Password must be start upper case"),
  })

   async function loginUser(values){

    setLoading(true)
    try {
      const res = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin" , values);
     
     toast.success(res.data.message)

     setToken(res.data.token)
     localStorage.setItem("tkn", res.data.token)
      
     setLoading(false)
     navigate("/")
    } catch (err) {
      console.log(err.response.data.message);
      toast.error(err.response.data.message)
      setLoading(false)
      
    }
  }
  const formik = useFormik({
    initialValues: user,
    onSubmit:loginUser,
    validationSchema:validation,
  });



  return (

    <div className="py-5">
    <h1 className="mb-7 text-green-700 text-5xl font-bold text-center">Login Now</h1>
        <div className="md:w-[60%] mx-auto md:p-0 p-5">

          <form onSubmit={formik.handleSubmit}>


          {/* input Email */}

          <div className="relative z-0 w-full mb-6 group ">
      <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  
      value={formik.values.email}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}  />


      <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email </label>
          </div>

        {formik.errors.email && formik.touched.email ?      
        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-red-100 dark:text-red-400" 
        role="alert">
  <span className="font-medium">Error </span> 
  {formik.errors.email}
        </div> : ""}  


          {/*input password  */}

          <div className="relative z-0 w-full mb-6 group ">
      <input type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" 
      placeholder=" " 
      value={formik.values.password}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}  />


      <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Your Password</label>
          </div>

          {formik.errors.password && formik.touched.password ?      
          <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-red-100 dark:text-red-400" 
          role="alert">
  <span className="font-medium">Error </span> 
  {formik.errors.password}
          </div> : ""}

          <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">

            {isLoading ==true ?<Bars
  height="30"
  width="30"
  color="white"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />: "Login"}
          </button>
          </form>
        </div>

  </div>
  )
}

export default Login