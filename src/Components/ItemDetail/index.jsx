// import { productos } from "../Mocks/productos";
import { useContext, useEffect } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { useState } from "react";
import { useParams } from 'react-router-dom'
import {doc, getFirestore, getDoc} from "firebase/firestore"
import { Detail } from "../Detail";
import "./estilo.css"


export function ItemDetail({producto}){
    let [getProd,setProd] = useState({})
    let {ID} = useParams();
    let {cant, add} = useContext(CartContext);
    let [getCant,setCant] = useState("1");
    let db = getFirestore();
    let ref = doc(db,"items",ID);
    //console.log(ref);
    useEffect(() => {
        getDoc(ref).then((snapshot) =>{
            if(snapshot.exists()){
                setProd({id:snapshot.id,...snapshot.data()})
            }
        })
    },[])
    // //console.log(producto)
    return(
        <ul className="itemDetail">
            {getProd === undefined
                ?<h1>cargando</h1>
                :(<Detail producto = {getProd} />)
            }            
            
        </ul>
    )
}