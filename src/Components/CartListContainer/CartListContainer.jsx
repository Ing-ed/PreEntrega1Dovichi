import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { useEffect, useState } from "react";
import "./estilo.css"

export function CartListContainer(){
    let { list, Borrar, cant, total } = useContext(CartContext)
    // let [lista, setLista] = useState(list);
    let [getArr,setArr] = useState([])
    console.log(cant)    

    return(
        <div className="cartListContainer">
            {
                cant === 0
                ?<h1>No hay elementos en el carrito</h1>
                :list.map((item,index) =>{
                        return(
                        <ul key={`lista ${index}`} className="itemCart">
                            <li key={`1 ${item.id}`}><p>{item.cant}</p></li>
                            <li key={`2 ${item.id}`}><p>{item.title}</p></li>
                            <li key={`3 ${item.id}`}><p>{item.description}</p></li>
                            <li key = {`4 ${item.id}`}><p>${+item.price*+item.cant}</p></li>
                            <li className="img" key={`5 ${item.id}`}><img src={item.picture}></img></li>
                            <li className="cerrar"><button onClick = {()=>Borrar(index)}>BORRAR</button></li>
                        </ul>
                    )
                })            
            }
            <div className="Total">
                <div className="info">
                    <h3>TOTAL:</h3>
                    <h3>${total}</h3>
                </div>
                {cant > 0 && <button>Terminar compra</button>}
                
            </div>
        </div>
    )
}