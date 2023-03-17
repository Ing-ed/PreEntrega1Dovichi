import "./estilo.css";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";

export function Add({}){
    let [getCant, setCant] = useState(1)
    let {add} = useContext(CartContext)
    // console.log(add);


    function changeHandler(event){
        setCant(event.target.value)
    }

    return(
        <div>
            <select onChange={changeHandler} className="Select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <button className="Button" onClick={() => add(+getCant)}>Añadir</button>
        </div>
    )
}