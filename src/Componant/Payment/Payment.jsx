import axios from "axios";
import { useContext, useState } from "react"
import toast from "react-hot-toast";
import { cartContext } from "../../Context/CartContext";

const Payment = () => {

  const [city , setCity] = useState("");
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState("");
const {cartId , setNumOfItems , setTotalPrice ,setProducts} = useContext(cartContext)
 

async function cashPaymeny (){
    const x = {
      
        shippingAddress:{
            details,
            phone,
            city,
            
    },
    };

    try {
      const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}` , 
        x , 
        {headers:{
          token:localStorage.getItem("tkn")
        }}
      )

      setNumOfItems(0)
      setProducts([])
      setTotalPrice(0)
      toast.success(data.status);
      
    } catch (error) {
      toast.error("error cash payment");
      
      
    }

   async function onlinePayment() {
    const x = {
      
      shippingAddress:{
          details,
          phone,
          city,
          
  },
  };

  try {
    const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5173/payment` , 
      x , 
      {headers:{
        token:localStorage.getItem("tkn")
      }}
    )

    toast.success(data.status);
    
  } catch (error) {
    toast.error("error cash payment");
    
    
  }
   }
    
  }
  async function onlinePaymeny (){
    const x = {
      
        shippingAddress:{
            details,
            phone,
            city,
            
    },
    };

    try {
      const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5173` , 
        x , 
        {headers:{
          token:localStorage.getItem("tkn")
        }}
      );

      window.open(data.session.url)
      toast.success(data.status);
    } catch (error) {
      toast.error( "error online payment");
      
      
    }
  }
  
  return (
    <section className="p-10">
         <h2 className="text-center text-3xl font-semibold text-green-800"> Payment</h2>
    <div className="w-full md:w-[70%] mx-auto">

        <div>

            {/* city */}
            <div className="relative z-0 w-full mb-6 group ">
      <input type="text" name="city" id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" 
      placeholder=" "
      onChange={(e) => setCity(e.target.value)} 
      />


      <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> City </label>
        </div>
            
            {/* Phone */}
        <div className="relative z-0 w-full mb-6 group ">
      <input type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" 
      placeholder=" " 
      onChange={ (e) => setPhone(e.target.value)}
      />


      <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Phone </label>
        </div>
        {/* details */}
       <textarea onChange={(e) => setDetails(e.target.value)}  id="message" rows="4" className= "  block p-2.5 w-full text-sm text-black bg-white rounded-lg border border-green-300 focus:ring-green-500 focus:border-green-500 dark:bg-white dark:border-green-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-green-500"
        placeholder="Write your thoughts here..."></textarea>

<button  onClick={cashPaymeny}  type="button" className= " mt-8  text-white bg-sky-700 hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
    Cash Payment
</button>

<button onClick={onlinePaymeny}  type="button" className= " mt-8  text-white bg-sky-700 hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
    online Payment
</button>
        </div>
    </div>
    </section>

  )
}

export default Payment