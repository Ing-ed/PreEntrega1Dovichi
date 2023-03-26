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

let menu = ["uControladores","Placas de desarrollo"]
let brand = "IngED - Electronics"


function Root() {
  let [getCant,setCant] = useState(0)
  let { categories } = useParams();
  console.log(categories,"cats")
  let uno = "false";
 
  let rutas = {
    undefined:<ItemListContainer/>,
    uControladores: <ItemListContainer seccion={"uControladores"}/>,
    Placasdedesarrollo: <ItemListContainer seccion={"Placasdedesarrollo"}/>,
    item:<ItemDetailContainer/>,
    Cart: <CartListContainer/>
  }
  // console.log(getCant, "inicio")
  return (
    <>
    <NavBar nombre = {brand} menu = {menu}/>
    {rutas[categories]}
    </>
  )
}

export default Root
