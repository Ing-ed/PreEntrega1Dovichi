import { NavBar } from "../Components/NavBar";
import { useState } from 'react'

let menu = ["uControladores","Placas de desarrollo","Servicios","Quienes somos?"]
let brand = "IngED - Electronics"

function Index(){
    let [getCant,setCant] = useState(0)
    function sumar(cantidad){
        setCant(getCant + cantidad)
    }
    function select(sel){
    setSelect(sel)
    }
    return(
        <NavBar nombre = {brand} menu = {menu} cant = {getCant}/>
    )
}