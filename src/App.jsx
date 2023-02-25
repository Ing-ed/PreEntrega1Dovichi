import { useState } from 'react'
import { NavBar } from './Components/NavBar'
// import { ItemListContainer } from './Components/ItemListContainer'
import './App.css'

let menu = ["Productos","Servicios","Quienes Somos"]
let brand = "Brand"

function App() {

  return (
    <>
      <NavBar nombre = {brand} menu = {menu} cant = "4"/>
      {/* <ItemListContainer greeting={`Bienvenido a ${brand}`}/> */}
    </>
  )
}

export default App
