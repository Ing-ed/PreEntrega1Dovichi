import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"

export function ItemCart({index,item}){
    let {Delete, Borrar, Add} = useContext(CartContext)
    return(
        <ul key={`lista ${index}`} className="itemCart">
            <li key={`1 ${item.id}`}><p>{item.cant}</p></li>
            <li key={`2 ${item.id}`}><p>{item.title}</p></li>
            <br/>
            <li key = {`4 ${item.id}`}><p>${+item.price*+item.cant}</p></li>
            <div className="masmenos">
                <li ><button onClick = {()=> Borrar(index)}>-1</button></li>
                <li ><button onClick = {()=> Add(1,item)}>+1</button></li>
            </div>
            <li className="img" key={`5 ${item.id}`}><img src={item.picture}></img></li>
            <li className="cerrar"><button onClick = {()=>Delete(index)}>Quitar</button></li>
        </ul>
    )
}