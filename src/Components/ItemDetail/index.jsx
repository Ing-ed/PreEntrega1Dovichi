// import { productos } from "../Mocks/productos";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom'
import {doc, getFirestore, getDoc} from "firebase/firestore"
import { AddSub } from "../AddSub";
import "./estilo.css"


export function ItemDetail(){
    let [getProd,setProd] = useState({})
    let {Id} = useParams();
    let db = getFirestore();
    let ref = doc(db,"items",Id);
    useEffect(() => {
        getDoc(ref).then((snapshot) =>{
            if(snapshot.exists()){
                setProd({id:snapshot.id,...snapshot.data()})
            }
        })
    },[])
    return(
        <div className="itemDetail">
            {getProd === undefined
                ?<h1>cargando</h1>
                :
                (
                    <ul>
                        <li key={`1 ${getProd.ID}`}><img src={getProd.picture}/></li>
                        <li key={`2 ${getProd.ID}`}>{getProd.title}</li>
                        <li key={`3 ${getProd.ID}`}>{getProd.description} dsadsadasdsadasdasdassdas</li>
                        {   getProd.stock >= 1
                            ?<AddSub producto = {getProd} maxCant={getProd.stock}/>
                            :<p style={{color:"red"}}>Agotado</p>
                        }
                    </ul>
                )
            }            
            
        </div>
    )
}