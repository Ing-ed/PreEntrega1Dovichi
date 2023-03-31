
import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Routes/Root'
import ItemRoot from './Routes/itemRoot'
import DetailRoot from './Routes/DetailRoot'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { CartProvider } from './CartContext/CartContext'
import { initializeApp } from 'firebase/app'

// console.log(process.env.REACT_APP_apiKey)

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


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGEING_SENDER_ID ,
  appId: process.env.REACT_APP_APP_ID
};

initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>  
    <CartProvider>
      <RouterProvider router={router}/>
    </CartProvider>
  </React.StrictMode>,
)
