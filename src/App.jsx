import { useState } from 'react'
import { NavBar } from './Components/NavBar'
import { ItemListContainer } from './Components/ItemListContainer'
import { ItemList } from './Components/ItemList'
import { productos } from './Components/Mocks/productos'
// import { ItemListContainer } from './Components/ItemListContainer'
import './App.css'

let menu = ["uControladores","Placas de desarrollo","Servicios","Quienes somos?"]
let brand = "IngED - Electronics"


function App() {
  return (
    <>
      <NavBar select = {true} nombre = {brand} menu = {menu} cant = "4"/>
      <ItemListContainer greeting={`Bienvenido a ${brand}`}/>
      <ItemList productos={productos}/>
    </>
  )
}

export default App
