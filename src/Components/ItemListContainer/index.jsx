import { useState, useEffect } from "react";
import { ItemList } from "../ItemList";
import "./estilo.css";


export function ItemListContainer({productos,add,section}){
    let [getProds, setProds] = useState([])
    useEffect(() =>{
        let Productos = new Promise((resolve,reject) =>{
            setTimeout(() => resolve(productos),2000)
        })
        .then((resp) =>{
            console.log(section,"Section")
            if(Boolean(section)){
                let r = productos.filter(item => item.category === section)
                setProds(r)
                console.log(r,"R",section,"seccion")
            }
            else{
                setProds(resp)
            }
        })
        // .then((resp) =>setProds(resp))
        .catch(console.log("ERROR"))
    console.log(getProds,"getProds")
    },[section])

    console.log(getProds,"seccion")
    
    return(
        <div className="itemListCont">
            <h1 className="greeting">{section}</h1>
            <ItemList add = {add} productos={getProds}/>
        </div>
    )
}