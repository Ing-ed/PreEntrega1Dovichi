import { useState, useEffect } from "react";
import { ItemList } from "../ItemList";
import { useParams } from 'react-router-dom'
import "./estilo.css";


export function ItemListContainer({productos,add}){
    let [getProds, setProds] = useState([])
    let { ID } = useParams();
    let inicio = ""
    useEffect(() =>{
        let Productos = new Promise((resolve,reject) =>{
            setTimeout(() => resolve(productos),2000)
        })
        .then((resp) =>{
            if(Boolean(ID)){
                let r = productos.filter(item => item.category === ID)
                setProds(r)
            }
            else{
                inicio = "Inicio"
                setProds(resp)
            }
        })
        // .then((resp) =>setProds(resp))
        .catch(console.log("ERROR"))
    },[ID])

    
    return(
        <div className="itemListCont">
            {/* <h1 className="greeting">{section}</h1> */}
            <ItemList add = {add} productos={getProds}/>
        </div>
    )
}