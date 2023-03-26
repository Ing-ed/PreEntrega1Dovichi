// import { productos } from "../Mocks/productos";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { useState } from "react";
import "./estilo.css"


export function ItemDetail({producto}){
    let {cant, add} = useContext(CartContext);
    let [getCant,setCant] = useState("1");
    function handleCng(evt){
        if(evt.target.value <0){
            evt.target.value = 0;
        }
        setCant(evt.target.value)
    }
    
    return(
        <ul className="item">
            {producto === undefined
                ?<h1>cargando</h1>
                :(<>
                <div>
                    <li key={`1 ${producto.id}`}><p>{producto.title}</p></li>
                    <li key={`2 ${producto.id}`}><p>{producto.description}</p></li>
                    <li key={`3 ${producto.id}`}><img src={producto.picture}></img></li>
                </div>
                <input type="number" onChange={handleCng} placeholder = {getCant}></input>
                <button onClick={() => add(Number(getCant),producto)}>Agregar a carrito</button>
                </>)
            }            
            
        </ul>
    )
}