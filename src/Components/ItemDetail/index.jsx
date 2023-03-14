// import { productos } from "../Mocks/productos";
import { Add } from "../Add"
import "./estilo.css"


export function ItemDetail({producto, add}){
    return(
        <div className="itemDetail">
            <ul>
                <li><p>{producto.title}</p></li>
                <li><img src={producto.picture}/></li>
                <li><p>{producto.description}</p></li>
                <li><p>${producto.price}</p></li>
            </ul>
        <Add add = {add}/>
        </div>
    )
}