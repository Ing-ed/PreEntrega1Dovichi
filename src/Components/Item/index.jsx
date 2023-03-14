import "./estilo.css";
import { Add } from "../Add";
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom'

export function Item({producto,add}){
    let [getSelect, setSelect] = useState("");

    useEffect(() =>{
        setSelect(producto.id);
    },[])
    
    return(
        <ul className="item">
            <Link to = {`/item/${getSelect}`}>
                <div>
                <li key={`1 ${producto.id}`}><p>{producto.title}</p></li>
                <li key={`2 ${producto.id}`}><p>{producto.description}</p></li>
                <li key={`3 ${producto.id}`}><img src={producto.picture}></img></li>
                </div>
            </Link>
            <Add add = {add} />
        </ul>
    )
}