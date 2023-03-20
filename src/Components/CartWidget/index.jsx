import { useContext } from 'react'
import { Link } from 'react-router-dom';
import Carrito from '../../assets/Carrito.png'
import { CartContext } from '../../CartContext/CartContext'
import "./estilo.css";
export function CartWidget({cant}){
    let {producto} = useContext(CartContext);
    return(
        <Link to ="/Cart/list">
        <div className='cartWidget'>
            <img src={Carrito}/>
            <p>{cant}</p>
        </div>
        </Link>
    )
}