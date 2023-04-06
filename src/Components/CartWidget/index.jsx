
import { Link } from 'react-router-dom';
import Carrito from '../../assets/Carrito.png'
import "./estilo.css";

export function CartWidget({cant}){
    
    return(
        <Link to ="/Cart/list">
        <div className='cartWidget'>
            <img src={Carrito}/>
            <p>{cant}</p>
        </div>
        </Link>
    )
}