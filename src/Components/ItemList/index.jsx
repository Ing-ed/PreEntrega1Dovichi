import { Item } from "../Item";
import "./estilo.css";

export function ItemList({productos,add}){   //productos es un array con objetos dentro
    let arr = []
    productos.map(prod =>{
        arr.push(<li key={prod.id}><Item producto={prod} add={add}/></li>)
    })
    return(
        <ul className="itemList">
            {arr}
        </ul>
    )
}  