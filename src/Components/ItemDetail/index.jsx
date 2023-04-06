// import { productos } from "../Mocks/productos";
import { useContext, useEffect } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { useState } from "react";
import { useParams } from 'react-router-dom'
import {doc, getFirestore, getDoc} from "firebase/firestore"
import { AddSub } from "../AddSub";
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
        <div className="itemDetail">
            {getProd === undefined
                ?<h1>cargando</h1>
                :
                // (<>
                //     <div></div>
                //     <div></div>
                //     <div></div>
                //     <div></div>
                // </>
                // )
                (
                    <ul>
                        <li key={`1 ${getProd.ID}`}><img src={getProd.picture}/></li>
                        <li key={`2 ${getProd.ID}`}>{getProd.title}</li>
                        <li key={`3 ${getProd.ID}`}>{getProd.description} dsadsadasdsadasdasdassdas</li>
                        {   getProd.stock >= 1
                            ?<AddSub producto = {getProd} maxCant={getProd.stock}/>
                            :<p style={{color:"red"}}>Agotado</p>
                        }
                    </ul>)
            }            
            
        </div>
    )
}