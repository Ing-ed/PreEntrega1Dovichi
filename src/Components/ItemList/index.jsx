import { Item } from "../Item";
export function ItemList({productos}){   //productos es un array con objetos dentro
    let arr = []
    productos.map(prod =>{
        arr.push(<li key={prod.id}><Item producto={prod}/></li>)
    })
    return(
        <ul>
            {arr}
        </ul>
    )
}  