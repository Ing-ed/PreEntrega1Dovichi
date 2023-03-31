// import { productos } from "../Mocks/productos";
import { useContext, useEffect } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { useState } from "react";
import { useParams } from 'react-router-dom'
import {doc, getFirestore, getDoc} from "firebase/firestore"
import "./estilo.css"


export function ItemDetail({producto}){
    let [getProd,setProd] = useState({})
    let {ID} = useParams();
    let {cant, add} = useContext(CartContext);
    let [getCant,setCant] = useState("1");
    function handleCng(evt){
        if(evt.target.value <0){
            evt.target.value = 0;
        }
        setCant(evt.target.value)
    }
    let db = getFirestore();
    let ref = doc(db,"items",ID);
    console.log(ref);
    useEffect(() => {
        getDoc(ref).then((snapshot) =>{
            if(snapshot.exists()){
                setProd({id:snapshot.id,...snapshot.data()})
            }
        })
    },[])
    // console.log(producto)
    return(
        <ul className="item">
            {getProd === undefined
                ?<h1>cargando</h1>
                :(<>
                <div>
                    <li key={`1 ${getProd.id}`}><p>{getProd.title}</p></li>
                    <li key={`2 ${getProd.id}`}><p>{getProd.description}</p></li>
                    <li key={`3 ${getProd.id}`}><img src={getProd.picture}></img></li>
                </div>
                <input type="number" onChange={handleCng} placeholder = {getCant}></input>
                <button onClick={() => add(Number(getCant),getProd)}>Agregar a carrito</button>
                </>)
            }            
            
        </ul>
    )
}