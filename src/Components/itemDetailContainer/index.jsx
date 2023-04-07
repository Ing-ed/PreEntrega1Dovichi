import { ItemDetail } from "../ItemDetail";
import { useEffect,useState } from "react";
import { useParams } from 'react-router-dom'
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"



export function ItemDetailContainer(){
    let [getProds,setProds] = useState([])
    const {Id} = useParams();
    let db = getFirestore();
    let itemCollection = collection(db,"items");
    useEffect(() =>{        
        let q = query(itemCollection,where("id", "==", Id))
        getDocs(q).then((snapshot) =>{
            setProds(snapshot.docs.map((doc) => ({id:doc.id,...doc.data()})))
        })
    },[Id])

    return(
        <div className="itemDetailCont">
            <ItemDetail producto={getProds[0]}/>
        </div>
    )
}