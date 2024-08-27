import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"
import { authContext } from "./AuthContext";

 export const cartContext = createContext()
const CartContextProvider = ({children}) => {

   const {token} = useContext(authContext)
    const [numOfItems, setNumOfItems] = useState(0)
    const [Products, setProducts] = useState([])
    const [TotalPrice, setTotalPrice] = useState(0)
    const [cartId, setCartId] = useState(0)


    async function addProductToCart(productId){
        try {
            const {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/cart" , 
                {
                    productId: productId
                } , {
                    headers:{
                        token:localStorage.getItem("tkn")
                    }
                }
                
            )

            getUserCart() ;

            return data
        } catch (error) {
            console.log(error);
            
            
        }
    }

    async function getUserCart() {
        try {
            const {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/cart" , {
                headers:{
                    token: localStorage.getItem("tkn")
                }
            })
            setNumOfItems(data.numOfCartItems)
            setProducts(data.data.products)
            setTotalPrice(data.data.totalCartPrice)
            setCartId(data.data._id)
            return data
        } catch (error) {
            console.log(error , "getUserCcart Context");
            
            
        }
    }

   async function updateCount(id , count){
        try {
            const {data} = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}` , 
                {
                    count: count,
                } , 
                {
                    headers:{
                        token:localStorage.getItem("tkn")
                    }
                }
            );

            setNumOfItems(data.numOfCartItems);
            setProducts(data.data.products);
            setTotalPrice(data.data.totalCartPrice);
            setCartId(data.data._id)

            return data
        } catch (error) {
            console.log(error , "error Upadta Count");
            
            
        }
    }

    async function deleteItem(id){
        try {
            const {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}` , {
                headers:{
                    token:localStorage.getItem("tkn")
                }
            });
            setNumOfItems(data.numOfCartItems)
            setProducts(data.data.products)
            setTotalPrice(data.data.totalCartPrice)
            setCartId(data.data._id)
            return data
        } catch (error) {
            console.log( "error deleteItem" , error);
            
        }
    }

    async function clearCart(id){
        try {
            const {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/`, {
                headers:{
                    token:localStorage.getItem("tkn")
                }
            });
            setNumOfItems(0)
            setProducts([])
            setTotalPrice(0)
            return data
        } catch (error) {
            console.log( "error deleteItem" , error);
            
        }
    }
    useEffect(function(){
       if (token != null) {
        getUserCart()
       }
    }, [token])
  return (
    <cartContext.Provider value={{addProductToCart , Products , TotalPrice , numOfItems , 
    updateCount , 
    deleteItem , 
    clearCart ,
    cartId , 
    setNumOfItems , 
    setTotalPrice ,
    setProducts}}>
        {children}
    </cartContext.Provider>
  )
}

export default CartContextProvider