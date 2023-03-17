// import { useState } from 'react'
import { NavBar } from '../Components/NavBar'
import { ItemListContainer } from '../Components/ItemListContainer'
import { productos } from '../Mocks/productos'
import { useState,useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import './App.css'
import { ItemDetailContainer } from '../Components/itemDetailContainer'
import { CartContext } from '../CartContext/CartContext'

let menu = ["uControladores","Placas de desarrollo","Servicios","Quienes somos?"]
let brand = "IngED - Electronics"


function Root() {
  // const {param} = useParams();
  let [getCant,setCant] = useState(0)
  // let [getSelect,setSelect] = useState("Inicio")

  function sumar(cantidad){
    setCant(getCant + cantidad)
    // console.log(cantidad)
  }
  function select(sel){
    setSelect(sel)
  }
  

  // console.log(getCant, "inicio")
  return (
    <>
        <NavBar nombre = {brand} menu = {menu}/>
        <ItemListContainer section={useParams().category} add = {sumar} productos={productos}/>
      {/* <ItemDetailContainer productos={productos}/> */}
    </>
  )
}

export default Root
