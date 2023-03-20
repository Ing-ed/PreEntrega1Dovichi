import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { useEffect, useState } from "react";
import "./estilo.css"

export function CartListContainer(){
    let { list, Borrar } = useContext(CartContext)
    // let [lista, setLista] = useState(list);
    let [getArr,setArr] = useState([])
    let arr = []

    function Remove(index){
        setArr(getArr.splice(index,1))
    }
    
    useEffect(() => {
        list.map((item, index) => {
            arr.push(
            <ul className="itemCart">
                <li key={`1 ${item.id}`}><p>{item.cant}</p></li>
                <li key={`2 ${item.id}`}><p>{item.title}</p></li>
                <li key={`3 ${item.id}`}><p>{item.description}</p></li>
                <li key = {`4 ${item.id}`}><p>${+item.price*+item.cant}</p></li>
                <li className="img" key={`5 ${item.id}`}><img src={item.picture}></img></li>
                <li className="cerrar"><button onClick = {()=>Remove(index)}>Cerrar</button></li>
            </ul>
            )
        })
        setArr(arr)
    },[])
    

    return(
        <div className="cartListContainer">
            {getArr}
        </div>
    )
}