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
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId ,
  appId: process.env.appId
};

initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>  
    <CartProvider>
      <RouterProvider router={router}/>
    </CartProvider>
  </React.StrictMode>,
)
