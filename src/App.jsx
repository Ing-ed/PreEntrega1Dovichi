// import { useState } from 'react'
import { NavBar } from './Components/NavBar'
import { ItemListContainer } from './Components/ItemListContainer'
import { productos } from './Mocks/productos'
import { useState,useEffect } from 'react'
// import { ItemListContainer } from './Components/ItemListContainer'
import './App.css'
import { ItemDetailContainer } from './Components/itemDetailContainer'

let menu = ["uControladores","Placas de desarrollo","Servicios","Quienes somos?"]
let brand = "IngED - Electronics"


function App() {
  let [getCant,setCant] = useState(0)
  let [getSelect,setSelect] = useState("Inicio")

  function sumar(cantidad){
    setCant(getCant + cantidad)
    // console.log(cantidad)
  }
  function select(sel){
    setSelect(sel)
  }
  

  console.log(getCant, "inicio")
  return (
    <>
      <NavBar select = {select} nombre = {brand} menu = {menu} cant = {getCant}/>
      {/* <ItemListContainer section={getSelect} add = {sumar} productos={productos}/> */}
      <ItemDetailContainer productos={productos}/>
    </>
  )
}

export default App
