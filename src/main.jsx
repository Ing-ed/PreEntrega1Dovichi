import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Routes/Root'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './index.css'
import { ItemDetailContainer } from './Components/itemDetailContainer'

let router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path:"/:category",
    element: <Root/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
