import { ItemDetail } from "../ItemDetail";
import { useEffect,useState } from "react";
import "./estilo.css"
// import { productos } from "../Mocks/productos";



export function ItemDetailContainer({productos,section}){
    let [getProds,setProds] = useState([])

    useEffect(() =>{
        let Productos = new Promise((resolve,reject) =>{
            setTimeout(() => resolve(productos),2000)
        })
        // .then((resp) =>console.log(resp))
        .then((resp) =>setProds(resp[0]))
        .catch(console.log("ERROR"))
    },[])

    return(
        <div className="itemListCont">
            <h1 className="greeting">{section}</h1>
            <ItemDetail producto={getProds}/>
            j
        </div>
    )
}