// import { useState } from 'react'
import { NavBar } from './Components/NavBar'
import { ItemListContainer } from './Components/ItemListContainer'
// import { ItemList } from './Components/ItemList'
import { productos } from './Components/Mocks/productos'
import { useState,useEffect } from 'react'
// import { ItemListContainer } from './Components/ItemListContainer'
import './App.css'

let menu = ["uControladores","Placas de desarrollo","Servicios","Quienes somos?"]
let brand = "IngED - Electronics"


function App() {
  let [getCant,setCant] = useState(0)

  function sumar(cantidad){
    // setCant(getCant + cantidad)
    console.log(getCant,"Aca")
  }
  

  console.log(getCant, "inicio")
  return (
    <>
      <NavBar select = {true} nombre = {brand} menu = {menu} cant = {getCant}/>
      <ItemListContainer add = {() => sumar} productos={productos}/>
      {/* <ItemList productos={productos}/> */}
    </>
  )
}

export default App
