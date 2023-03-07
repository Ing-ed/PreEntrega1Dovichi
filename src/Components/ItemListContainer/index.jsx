import { Item } from "../Item";
import { useState, useEffect } from "react";
import { ItemList } from "../ItemList";
import "./estilo.css";


export function ItemListContainer({productos,add,section}){
    let [getProds, setProds] = useState([])

    useEffect(() =>{
        let Productos = new Promise((resolve,reject) =>{
            setTimeout(() => resolve(productos),2000)
        })
        .then((resp) =>setProds(resp))
        .catch(console.log("ERROR"))
    },[])

    
    return(
        <div className="itemListCont">
            <h1 className="greeting">{section}</h1>
            <ItemList add = {add} productos={getProds}/>
        </div>
    )
}