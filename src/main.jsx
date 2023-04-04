// require('dotenv').config();
import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Routes/Root'
import ItemRoot from './Routes/itemRoot'
import DetailRoot from './Routes/DetailRoot'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { CartProvider } from './CartContext/CartContext'
import { initializeApp } from 'firebase/app'


let router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path:"/:categories/:ID",
    element: <Root />
  },
  // {
  //   path:"/item/:ID",
  //   element:<DetailRoot />
  // },
  
])

// solo para debug
// const firebaseConfig = {
//   apiKey: "AIzaSyCJt0AThhP18AvI2OglP1kVZWVmZEjBlC4",
//   authDomain: "ecomercerjs.firebaseapp.com",
//   projectId: "ecomercerjs",
//   storageBucket: "ecomercerjs.appspot.com",
//   messagingSenderId: "782492432867",
//   appId: "1:782492432867:web:5c73744b078b0b1b2ec8d6"
// }

const firebaseConfig = {
  apiKey:import.meta.env.VITE_APP_API_KEY,
  authDomain:import.meta.env.VITE_AUTHDOMAIN,
  projectId:import.meta.env.VITE_PROJECTID,
  storageBucket:import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId:import.meta.env.VITE_MESSAGESINGSENDERID,
  appId:import.meta.env.VITE_APPID
};
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>  
    <CartProvider>
      <RouterProvider router={router}/>
    </CartProvider>
  </React.StrictMode>,
)
