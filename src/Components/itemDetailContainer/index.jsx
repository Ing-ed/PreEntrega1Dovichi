import { ItemDetail } from "../ItemDetail";
import { useEffect,useState } from "react";
import { useParams } from 'react-router-dom'
import "./estilo.css"
// import { productos } from "../Mocks/productos";



export function ItemDetailContainer({productos,add}){
    let [getProds,setProds] = useState([])
    const {ID} = useParams();
    console.log(ID, "id")

    useEffect(() =>{
        let Productos = new Promise((resolve,reject) =>{
            setTimeout(() => resolve(productos),2000)
        })
        // .then((resp) => console.log(useParams().ID,"params"))
        // .then((resp) =>console.log(useParams(),"parametros"))
        // .then((resp) => console.log(resp.filter(item => item.id === ID)))
        .then((resp) => resp.filter(item => item.id === ID))
        .then((resp) => setProds(resp[0]))
        // .then((resp) =>setProds(resp[0]))
        .catch(console.log("ERROR"))
    },[ID])

    return(
        <div className="itemListCont">
            {/* <h1 className="greeting">Hola</h1> */}
            <ItemDetail producto={getProds} add = {add}/>
        </div>
    )
}