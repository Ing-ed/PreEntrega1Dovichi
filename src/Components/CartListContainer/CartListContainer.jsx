import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { useEffect, useState } from "react";
import "./estilo.css"

export function CartListContainer(){
    let { list, Borrar, cant } = useContext(CartContext)
    let [getArr,setArr] = useState([])


    return(
        <div className="cartListContainer">
            {cant > 0
                ?list.map((item,index) =>{
                    console.log();
                    return(
                        <ul key={index} className="itemCart">
                            <li key={`1 ${item.id}`}><p>{item.cant}</p></li>
                            <li key={`2 ${item.id}`}><p>{item.title}</p></li>
                            <li key={`3 ${item.id}`}><p>{item.description}</p></li>
                            <li key = {`4 ${item.id}`}><p>${+item.price*+item.cant}</p></li>
                            <li className="img" key={`5 ${item.id}`}><img src={item.picture}></img></li>
                            <li className="cerrar"><button onClick = {()=>Borrar(index)}>Cerrar</button></li>
                        </ul>
                    )
                })
            :<h1>Tu carrito de compras esta vacio</h1>}
        </div>
    )
}