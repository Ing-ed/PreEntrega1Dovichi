import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { ItemCart } from "../../ItemCart";
import "./estilo.css"

export function CartListContainer(){
    let { list,  cant, total, Reset, HabForm } = useContext(CartContext)

    return(
        <div className="cartListContainer">
            {
                cant === 0
                ?<h1>No hay elementos en el carrito</h1>
                :list.map((item,index) =>{
                        return(
                            <ItemCart index={index} item = {item}/>
                    )
                })            
            }
            <div className="Total">
                <div className="info">
                    <h3>TOTAL:</h3>
                    <h3>${total}</h3>
                </div>
                {cant > 0 && <div>
                <button onClick={HabForm}>Terminar compra</button>
                <button onClick={Reset}>Limpiar Carrito</button>
                </div>}
                
            </div>
        </div>
    )
}