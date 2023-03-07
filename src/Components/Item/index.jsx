import "./estilo.css";
import { Add } from "../Add";

export function Item({producto,add}){
    
    return(
        <ul className="item">
            <div>
            <li key={`1 ${producto.id}`}><p>{producto.title}</p></li>
            <li key={`2 ${producto.id}`}><p>{producto.description}</p></li>
            </div>
            <li key={`3 ${producto.id}`}><img src={producto.picture}></img></li>
            <Add add = {add} />
        </ul>
    )
}