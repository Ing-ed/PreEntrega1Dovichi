import "./estilo.css";
import { AddSub } from "../AddSub";
import { useState,useEffect, useContext } from "react";
import { Link } from 'react-router-dom'

export function Item({producto}){
    let [getSelect, setSelect] = useState("");

    useEffect(() =>{
        setSelect(producto.id);
    },[])

    return(
        <ul className="item">
            <Link to = {`/item/${getSelect}`}>
                <li key={`1 ${producto.id}`}><p>{producto.title}</p></li>
                <li key={`2 ${producto.id}`}><p>{producto.description}</p></li>
                <li key={`3 ${producto.id}`}><img src={producto.picture}></img></li>
                <li key={`4 ${producto.id}`}><p>${producto.price}</p></li>
            </Link>
            {   producto.stock >= 1
                ?<AddSub producto = {producto} maxCant={producto.stock}/>
                :<p style={{color:"red"}}>Agotado</p>
            }
            {/* <input type="number" onChange={handleCng} placeholder = {getCant}></input> */}
        </ul>
    )
}