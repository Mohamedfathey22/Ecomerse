import axios from "axios";
import React, { useEffect, useState } from "react";

import { Bars } from "react-loader-spinner";

export default function Categories() {
  const [categories, setcategories] = useState([]);
  const [loading, setisloading] = useState(true);

  useEffect(() => {
    getCategories();
  }, []);
  async function getCategories() {
    setisloading(true);
    let { data } = await axios
      .get("https://ecommerce.routemisr.com/api/v1/categories")
      .finally(() => {
        setisloading(false);
      });
    setcategories(data.data);
  }

  if (loading) {
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
   
<section className="py-8">
    <div className="grid md:grid-cols-4 lg:grid-cols-4 sm:grid-cols-1  gap-4">
       
       <title>Brands</title>
     
     {categories.map((product ) => {
       return (
         <>
                     <div className="max-w-2xl mx-auto gap-5">
           <div className="bg-white border-[1px] border-gray-400  hover:shadow-green-600 hover:shadow-2xl transition-all duration-[0.5s]  hover:rounded-lg max-w-sm ">
             <img
               className="rounded-t-lg p-8  h-[400px] w-[300px]  "
               src={product.image}
               alt="product image" 
             />
             <h1 className=" text-center text-[20px] text-black  py-4">
               {product.name}
             </h1>
           </div>
         </div>
         </>

       );
     })}
   </div>
    </section>

  );
}