import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Bars } from 'react-loader-spinner'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { cartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast'

const ProductDetails = () => {
 const {addProductToCart} = useContext(cartContext);
 const [loading , setloading]= useState(false)
  
   const { id } = useParams()

  async function getproduct(){
   
    return await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
   }
    async function addProduct(){
      setloading(true);
     const data = await addProductToCart(id);

     console.log(data);


     if (data) {
      toast.success(data.message);
    setloading(false);

     }else{
      toast.error("error");
    setloading(false);


     }
     
    }
    const {data , isLoading} = useQuery(`product${id}` , getproduct)

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

    console.log(data);
    


  return (
    <section className='py-8'>
      <div className='w-full md:w-[80%] mx-auto'>
        <div className=' flex flex-wrap justify-center items-center '>
          <div className=' md:w-1/3 w-full p-5'>

          <div>
            <img src={data?.data.data.imageCover} alt="" />
          </div>
          </div>
          <div className='md:w-2/3 w-full p-5'>
          <div>
            <h2 className='text-2xl mb-3 font-semibold '>{data?.data.data.title}</h2>
            <p className='text-1xl mb-3'>{data?.data.data.description}</p>
            <h2 className='text-1xl mb-3 font-mono text-green-700 '>{data?.data.data.category.name}</h2>
            <div className="flex flex-wrap justify-between items-center mt-3">
              <div>
                <h4>{data?.data.data.price} EGP</h4>
              </div>
              <div>
                {""}
                <h4> <i className="fa-solid fa-star text-yellow-400 mr-2"></i>{""}
                {data?.data.data.ratingsAverage}
                </h4>
              </div>
            </div>
            <button onClick={addProduct} type="button" className= " w-full mt-4 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">
            {loading? <i className='fa-solid fa-spinner fa-spin text-white'></i>: "Add to Cart"}</button>

          </div>
          
          
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails