// import { useState } from 'react'
import { NavBar } from '../Components/NavBar'
import { ItemListContainer } from '../Components/ItemListContainer'
// import { productos } from '../Mocks/productos'
import { useState,useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetailContainer } from '../Components/itemDetailContainer'
import { CartListContainer } from '../Components/CartListContainer/CartListContainer'
import { initializeApp } from "firebase/app";
import './App.css'
import { BuyerData } from '../Components/BuyerData'
import { CartContext } from '../CartContext/CartContext'
import { Footer } from '../Components/Footer'

let menu = ["uControladores","Placas de desarrollo","FPGA","Todos"]
let brand = "IngED - Embebidos"

// //console.log(process.env.REACT_APP_API_KEY,"Console")

function Root() {
  let [getCant,setCant] = useState(0)
  let { categories } = useParams();
  let { desForm } = useContext(CartContext)
  //console.log(categories,"cats")
  let uno = "false";
 
  useEffect(() =>{
    desForm()
  },[categories])

  let rutas = {
    undefined:<ItemListContainer/>,
    uControladores: <ItemListContainer seccion={"uControladores"}/>,
    Placasdedesarrollo: <ItemListContainer seccion={"Placasdedesarrollo"}/>,
    FPGA: <ItemListContainer seccion={"FPGA"}/>,
    Todos:<ItemListContainer/>,
    item:<ItemDetailContainer/>,
    Cart: <CartListContainer/>
  }
  // //console.log(getCant, "inicio")
  return (
    <>
      <NavBar nombre = {brand} menu = {menu}/>
      {rutas[categories]}
      <BuyerData/>
      <Footer nombre = {brand}/>
    </>
  )
}

export default Root
