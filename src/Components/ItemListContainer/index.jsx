import { useState, useEffect } from "react";
import { ItemList } from "../ItemList";
import { useParams } from 'react-router-dom'
import {collection, doc,getDoc,getDocs, getFirestore, query, where} from "firebase/firestore"
import "./estilo.css";


export function ItemListContainer({seccion}){
    let [getProds, setProds] = useState([])
    let inicio = ""

    let db = getFirestore();
    // console.log(db,"db");
    let itemCollection = collection(db,"items");
    useEffect(() =>{
        if(seccion !== undefined){
            let q = query(itemCollection,where("category", "==", seccion))
            console.log("seccion es ",seccion)
            getDocs(q).then((snapshot) =>{
                setProds(snapshot.docs.map((doc) => ({id:doc.id,...doc.data()})))
            })
        }else{
            getDocs(itemCollection).then((snapshot) =>{
                setProds(snapshot.docs.map((doc) => ({id:doc.id, ...doc.data()})))
                // console.log(snapshot.docs[0].data()),"then";
            }).catch((err) => console.log(err))
        }
    },[seccion])
    // console.log(getProds)

    
    return(
        <div className="itemListCont">
            {/* <h1 className="greeting">{section}</h1> */}
            <ItemList productos={getProds}/>
        </div>
    )
}