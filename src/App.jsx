import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Componant/Layout/Layout"
import Products from "./Componant/Products/Products"
import Category from "./Componant/Category/Category"
import Brand from "./Componant/Brand/Brand"
import Login from "./Componant/Login/Login"
import Register from "./Componant/Register/Register"
import NotFound from "./Componant/NotFound/NotFound"
import { Toaster } from "react-hot-toast"
import AuthContextProvider from "./Context/AuthContext"
import ProtectedRoute from "./Componant/ProtectedRoute/ProtectedRoute"
import { QueryClient, QueryClientProvider } from "react-query"
import ProductDetails from "./Componant/productDetails/ProductDetails"
import CartContextProvider from "./Context/CartContext"
import Cart from "./Componant/Cart/Cart"
import Payment from "./Componant/Payment/Payment"
import AllOrders from "./Componant/AllOrders/Allorders"

function App() {

  const x =  new QueryClient()

  const router = createBrowserRouter([
    {path: "/", element: <Layout/>, children:[
      {path:"/" , 
        element: (
          <ProtectedRoute>
          <Products/>
        </ProtectedRoute>
        )
},
      {path:"/category" , 
        element: (
          <ProtectedRoute>
          <Category/>
        </ProtectedRoute>
        )

      },
      {
        path:"/brand" , 
        element: (
          <ProtectedRoute>
          <Brand/>
        </ProtectedRoute>
        )
      },
      {
        path:"/productDetails/:id" , 
        element: (
          <ProtectedRoute>
          <ProductDetails/>
        </ProtectedRoute>
        )
      },
      {
        path:"/cart" , 
        element: (
          <ProtectedRoute>
          <Cart/>
        </ProtectedRoute>
        )
      },
      {
        path:"/payment" , 
        element: (
          <ProtectedRoute>
          <Payment/>
        </ProtectedRoute>
        )
      },
      {
        path:"/allorders" , 
        element: (
          <ProtectedRoute>
          <AllOrders/>
        </ProtectedRoute>
        )
      },
      {path:"/login" , element:<Login/>},
      {path:"/register" , element:<Register/>},
      {path:"*" , element:<NotFound/>},
    ]},
  ])
  return (
    <QueryClientProvider client={x}>
    <AuthContextProvider>
     <CartContextProvider>
    <Toaster/>
    <RouterProvider router={router} />
    </CartContextProvider>
    </AuthContextProvider>
    </QueryClientProvider>
    
  )
}

export default App
