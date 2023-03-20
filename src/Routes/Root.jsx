// import { useState } from 'react'
import { NavBar } from '../Components/NavBar'
import { ItemListContainer } from '../Components/ItemListContainer'
import { productos } from '../Mocks/productos'
import { useState,useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetailContainer } from '../Components/itemDetailContainer'
import { CartListContainer } from '../Components/CartListContainer/CartListContainer'
import './App.css'

let menu = ["uControladores","Placas de desarrollo","Servicios","Quienes somos?"]
let brand = "IngED - Electronics"


function Root() {
  // const {param} = useParams();
  let [getCant,setCant] = useState(0)
  let { categories } = useParams();
  console.log(categories,"r0ot")
  let uno = "false";
  // let [getSelect,setSelect] = useState("Inicio")
 

  // console.log(getCant, "inicio")
  return (
    <>
    <NavBar nombre = {brand} menu = {menu}/>
      {categories === undefined
        ?<ItemListContainer  productos={productos}/>      
        : categories === "item"
          ?<ItemDetailContainer productos={productos}/>
          : categories === "Cart"
            ? <CartListContainer/>
            :<ItemListContainer section={categories.category} productos={productos}/>
      }
    </>
  )
}

export default Root
