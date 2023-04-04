import "./estilo.css";
import { AddSub } from "../AddSub";
import { useState,useEffect, useContext } from "react";
import { Link } from 'react-router-dom'
import { CartContext } from "../../CartContext/CartContext";

export function Detail({producto}){
    let [getSelect, setSelect] = useState("");
    let [getCant,setCant] = useState("1");
    let {cant,Add} = useContext(CartContext);

    useEffect(() =>{
        setSelect(producto.id);
    },[])

    function handleCng(evt){
        if(evt.target.value <0){
            evt.target.value = 0;
        }
        setCant(evt.target.value)
    }
    
    return(
        <ul className="Detail">
            <Link to = {`/item/${getSelect}`}>
                <li key={`1 ${producto.id}`}><p>{producto.title}</p></li>
                <li key={`2 ${producto.id}`}><p>{producto.description}</p></li>
                <li key={`3 ${producto.id}`}><img src={producto.picture}></img></li>
            </Link>
            {   producto.stock > 1
                ?<AddSub producto = {producto} maxCant={producto.stock}/>
                :<p style={{color:"red"}}>Agotado</p>
            }
            {/* <input type="number" onChange={handleCng} placeholder = {getCant}></input> */}
        </ul>
    )
}