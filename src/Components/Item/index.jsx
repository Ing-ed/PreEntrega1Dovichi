import "./estilo.css";
import { Add } from "../Add";
import { useState,useEffect, useContext } from "react";
import { Link } from 'react-router-dom'
import { CartContext } from "../../CartContext/CartContext";

export function Item({producto}){
    let [getSelect, setSelect] = useState("");
    let [getCant,setCant] = useState("1");
    let {cant,add} = useContext(CartContext);

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
        <ul className="item">
            <Link to = {`/item/${getSelect}`}>
                <li key={`1 ${producto.id}`}><p>{producto.title}</p></li>
                <li key={`2 ${producto.id}`}><p>{producto.description}</p></li>
                <li key={`3 ${producto.id}`}><img src={producto.picture}></img></li>
            </Link>
            <input type="number" onChange={handleCng} placeholder = {getCant}></input>
            <button onClick={() => add(Number(getCant),producto)}>Agregar a carrito</button>
        </ul>
    )
}