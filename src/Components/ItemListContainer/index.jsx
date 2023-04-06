import { useState, useEffect } from "react";
import { ItemList } from "../ItemList";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"
import "./estilo.css";


export function ItemListContainer({seccion}){
    let [getProds, setProds] = useState([])

    let db = getFirestore();
    let itemCollection = collection(db,"items");
    useEffect(() =>{
        if(seccion !== undefined){
            let q = query(itemCollection,where("category", "==", seccion))
            getDocs(q).then((snapshot) =>{
                setProds(snapshot.docs.map((doc) => ({id:doc.id,...doc.data()})))
            })
        }else{
            getDocs(itemCollection).then((snapshot) =>{
                setProds(snapshot.docs.map((doc) => ({id:doc.id, ...doc.data()})))
            }).catch((err) => console.log(err))
        }
    },[seccion])

    
    return(
        <div className="itemListCont">
            <ItemList productos={getProds}/>
        </div>
    )
}