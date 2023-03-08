import { productos } from "../Mocks/productos";
import "./estilo.css"


export function ItemDetail({producto}){
    console.log(typeof producto, "aca")
    return(
        <div className="itemDetail">
            <ul>
                <li><p>{producto.title}</p></li>
                <li><img src={producto.picture}/></li>
                <li><p>${producto.price}</p></li>
            </ul>
            {/* <hr/> */}
            <p>{producto.description}</p>
            {/* </ul> */}
        </div>
    )
}