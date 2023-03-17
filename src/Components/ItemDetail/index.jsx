// import { productos } from "../Mocks/productos";
import { Add } from "../Add"
import "./estilo.css"


export function ItemDetail({producto, add}){
    return(
        <ul className="item">
                <div>
                <li key={`1 ${producto.id}`}><p>{producto.title}</p></li>
                <li key={`2 ${producto.id}`}><p>{producto.description}</p></li>
                <li key={`3 ${producto.id}`}><img src={producto.picture}></img></li>
                </div>
            <Add />
        </ul>
    )
}