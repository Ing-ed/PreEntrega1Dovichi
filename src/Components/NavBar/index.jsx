import { CartWidget} from "../CartWidget"
import { useEffect, useState } from "react";
import "./estilo.css";

//menu es un array, lo que permite añadir elemnentos de manera mas sencilla
//por cada elemento del array menu se crea una etiqueta button


export function NavBar({nombre,menu,cant,select}){
    let [clicked, setClicked] = useState('');
    let arr = []
    menu.map(item=>{
        // arr.push(<li><button style={estilo.boton}>{item}</button></li>)
        arr.push(<li  key={item}><button className="menu" onClick={() => select(item)}>{item}</button></li>)
    })
    return(
        <nav >
            <h3 onClick={() => select("Inicio")} className="Nombre">{nombre}</h3>
            <ul className="lista" >
                {arr}
            </ul>
            <CartWidget cant={cant}/>
        </nav>
    )
}