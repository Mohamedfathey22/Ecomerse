import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { Bars } from "react-loader-spinner";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";
import HomeSlider from "../HomeSlider/HomeSlider";
import CategorySlider from "../CategorySlider/CategorySlider";



const Products = () => {

  const {addProductToCart} = useContext(cartContext);
  async function getAllProduct(){
  
       return await axios.get("https://ecommerce.routemisr.com/api/v1/products");

    } 
    
  

   const {data , isLoading , isFetching , error } = useQuery("products" ,
     getAllProduct,
    {
    
    } )


    async function addProduct(id){
      
     const data = await addProductToCart(id);

     console.log(data);
     if (data) {
      toast.success(data.message);
     }else{
      toast.error("error");
     }
    }
  console.log(data?.data.data);
if (isLoading) {
  return <div className="h-screen flex flex-wrap justify-center items-center bg-green-500">

<Bars
height="80"
width="80"
color="#fff"
ariaLabel="bars-loading"
wrapperStyle={{}}
wrapperClass=""
visible={true}
/>

</div>
  
}
  return (
    <>

    <section className="py-8">
      <div className="w-full md:w-[90%] m-auto">
        <HomeSlider/>
        <CategorySlider/>
        <div className="flex flex-wrap justify-center items-center">
          {data.data.data.map((product , idx)=> <>
            <div key={idx} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 p-5">

           
            <div className="inner p-3 bg-slate-300  hover:shadow-green-600 hover:shadow-xl transition-all duration-[0.5s]  hover:rounded-lg max-w-sm ">
            <Link to={`/productDetails/${product.id}`}>
            <img src={product.imageCover} alt="image" />
            <h2 className="mt-3 text-green-500">{product.category.name}</h2>
            <h2 className="mt-3">{product.title.split(" ").slice(0 , 2).join(" ")}</h2>
           
            <div className="flex flex-wrap justify-between items-center mt-3">
              <div>
                <h4>{product.price}</h4>
              </div>
              <div>
                {""}
                <h4> <i className="fa-solid fa-star text-yellow-400 mr-2"></i>{""}
                {product.ratingsAverage}
                </h4>
              </div>
            </div>
            </Link>
            <button onClick={()=> addProduct(product.id)} type="button" className= " w-full mt-4 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">
              Add to cart</button>
          </div>
         

          </div>
          </>
          )}
        </div>
      </div>
    </section> 
    

    </>
  )
}

export default Products