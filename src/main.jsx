import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Routes/Root'
import ItemRoot from './Routes/itemRoot'
import DetailRoot from './Routes/DetailRoot'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { NavBar } from './Components/NavBar'
import { CartContext } from './CartContext/CartContext'
import './index.css'
import { CartProvider } from './CartContext/CartContext'


let router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path:"/category/:ID",
    element: <ItemRoot />
  },
  {
    path:"/item/:ID",
    element:<DetailRoot />
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>  
    <CartProvider>
      <RouterProvider router={router}/>
    </CartProvider>
  </React.StrictMode>,
)
