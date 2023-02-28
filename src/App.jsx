import { useState } from 'react'
import { NavBar } from './Components/NavBar'
import { ItemListContainer } from './Components/ItemListContainer'
// import { ItemListContainer } from './Components/ItemListContainer'
import './App.css'

let menu = ["uControladores","Placas de desarrollo","Servicios","Quienes somos?"]
let brand = "IngED - Electronics"

function App() {
  let [clicked, setClicked] = useState({brand})
  function hijoAPadre({item}){
    console.log(item);
    setClicked(item)
  }
  return (
    <>
      <NavBar hijoAPadre={hijoAPadre} select = {true} nombre = {brand} menu = {menu} cant = "4"/>
      <ItemListContainer greeting={`Bienvenido a ${clicked}`}/>
    </>
  )
}

export default App
