import "./estilo.css";
import { useState, useEffect } from "react";

export function Add({add}){
    let [getCant, setCant] = useState(1)
    function changeHandler(event){
        setCant(event.target.value)
        // console.log(event.target.value)
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