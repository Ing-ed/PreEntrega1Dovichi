// import { useState } from 'react'
import { NavBar } from '../Components/NavBar'
import { ItemListContainer } from '../Components/ItemListContainer'
import { productos } from '../Mocks/productos'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './App.css'
import { ItemDetailContainer } from '../Components/itemDetailContainer'

let menu = ["uControladores","Placas de desarrollo","Servicios","Quienes somos?"]
let brand = "IngED - Electronics"


function Root() {
  const {param} = useParams();
  let [getCant,setCant] = useState(0)
  let [getSelect,setSelect] = useState("Inicio")

  function sumar(cantidad){
    setCant(getCant + cantidad)
    // console.log(cantidad)
  }
  function select(sel){
    setSelect(sel)
  }
  

  console.log(Boolean(useParams()),"param")
  // console.log(getCant, "inicio")
  return (
    <>
      <NavBar select = {select} nombre = {brand} menu = {menu} cant = {getCant}/>
      <ItemListContainer section={getSelect} add = {sumar} productos={productos}/>
      {/* <ItemDetailContainer productos={productos}/> */}
    </>
  )
}

export default Root
