import { productos } from "../Mocks/productos";

export function ItemDetail(){
    return(
        <div>
            <li><p>{productos.description}</p></li>
            <li><p>{productos.pic}</p></li>
            <li><p>{productos.price}</p></li>
        </div>
    )
}