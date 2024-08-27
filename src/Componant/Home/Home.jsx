import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Product from "./../Product/Product";
import { Bars } from "react-loader-spinner";

export default function Home() {
  const [Products, setproducts] = useState([]);
  const [loading, setisloading] = useState(true);
  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    setisloading(true);
    let { data } = await axios
      .get("https://ecommerce.routemisr.com/api/v1/products")
      .finally(() => {
        setisloading(false);
      });
    setproducts(data.data);
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
    <>
    
    <h2 className="text-[20px] text-center py-5 capitalize my-3 font-semibold">Shop Category Slider</h2>
    
      <div className=" grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1  gap-4 py-8 ">
        
          <title>Home</title>
        
        {Products.map((Product, index) => {
          return <Product product={Product} key={index} />;
        })}
      </div>
    </>
  );
}