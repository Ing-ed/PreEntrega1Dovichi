import { ItemDetail } from "../ItemDetail";
import { useEffect,useState } from "react";
import { useParams } from 'react-router-dom'
import {collection, doc,getDoc,getDocs, getFirestore, query, where} from "firebase/firestore"
import "./estilo.css"
// import { productos } from "../Mocks/productos";



export function ItemDetailContainer(){
    let [getProds,setProds] = useState([])
    const {ID} = useParams();
    let db = getFirestore();
    let itemCollection = collection(db,"items");
    useEffect(() =>{        
        let q = query(itemCollection,where("id", "==", ID))
        getDocs(q).then((snapshot) =>{
            setProds(snapshot.docs.map((doc) => ({id:doc.id,...doc.data()})))
        })
    },[ID])
    console.log(getProds[0])

    return(
        <div className="itemListCont">
            <ItemDetail producto={getProds[0]}/>
        </div>
    )
}