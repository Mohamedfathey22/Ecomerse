import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import {  useEffect, useState} from 'react'
import { Bars } from 'react-loader-spinner'

const AllOrders = () => {

   const {id} =  jwtDecode(localStorage.getItem("tkn"))

   const [loading, setLoading] = useState(false)
   const [Allorder, setAllorder] = useState(null)


   async function getAllOrder() {
    setLoading(true)
    try {
        const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)
        setAllorder(data)
        setLoading(false)
        console.log(data);
        
    } catch (error) {
        console.log(error);
        setLoading(false)

        
    }
   }

   useEffect(() => {
    getAllOrder()
   } , [])

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
    <section className='py-8' >
        <div className="w-full md:w-[80%] mx-auto">

            {Allorder ? Allorder.map((order , idx) => <div key={idx}>

                <div className='p-5 mb-3 bg-slate-500'>
                    <div className=" flex flex-wrap justify-center items-center ">
                        {order.cartItems?.map(function (item , idx){return <div key={idx} className='w-1/6'>
                        <img className='w-full' src={item.product.imageCover} alt="" />
                        </div>})}
                    </div>

                    <h2>total Order Price :  {order.totalOrderPrice} EGP</h2>
                    <h2>payment Method Type :  {order.paymentMethodType} </h2>
                </div>
            </div>) : ""}
        </div>
    </section>
  )
}

export default AllOrders