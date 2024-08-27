import React, { useContext } from 'react'
import { cartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {

   const {Products , TotalPrice , updateCount , deleteItem , clearCart } =  useContext(cartContext)

   
  return (
    <section className='py-8'>
        <div className='w-full md:w-[80%] mx-auto bg-slate-300 p-5'>
            {Products !=0 ?  <>
                <h2 className='text-green-600 text-2xl font-mono'>
                TotalPrice : 
                {TotalPrice} </h2>
                <button 
                onClick={clearCart}
                    type="button" 
                    className= "  text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">
                    clear cart 
                    </button>

                    <Link
                
                    to="/payment" 
                    className= "  text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800">
                    Payment
                    </Link>
            {Products?.map((item , idx)=>
            <>
<div className=' flex flex-wrap justify-center items-center border-b-2 border-green-500 '>
<div className='w-1/6 p-5'>
<img src={item.product.imageCover} className='w-full' alt="" />
</div>
<div className='w-4/6 p-5'>
<h2 className='mb-3 text-2xl'>{item.product.title}</h2>
<h2 className='mb-3 text-2xl'>{item.price} EGP</h2>

<button 
onClick={() => deleteItem(item.product.id)}
type="button" 
className= " text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">
    Remove
</button>
</div>
<div className='w-1/6 p-5'>
<div className=' flex  justify-between items-center'>
<button  onClick={() => updateCount(item.product.id , item.count + 1)} type="button" className= " text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">
    +
</button>
    <h2 className='mx-3'>{item.count}</h2>
    <button 
    onClick={() => updateCount(item.product.id , item.count - 1)}
    type="button" 
    disabled = {item.count == 1 ? true : false}
    className= {`  ${item.count == 1 ? "disabled:opacity-80 cursor-not-allowed" : "" } text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"`} >
    -
</button>
</div>
</div>
</div>
</>
)}
            
            </> : <div className='p-5 text-center text-green-800'> 
                <h2 className='text-3xl font-bold'>NO DATA TO DISPLAY IT </h2>
                </div>}
        </div>
</section>
  )
}

export default Cart