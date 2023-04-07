import { useRef, useContext } from "react";
import { CartContext } from "../../../CartContext/CartContext";

// EL COMPONENTE OkNok HACE REFERENCIA A LOS ESTADOS OK Y NOK (NO-OK)
export function OkNok({message}){
    let {desForm, buyId} = useContext(CartContext);
    let ref = useRef("referencia")
    
    let msg = buyId === undefined? message : `${message} Su ID de compra es ${buyId}`
    function escape(event){
        if(event.target === ref.current)
            desForm()
    }
    
    return(
        <div onClick={escape} ref = {ref} className="FormularioCompraCont">
            <div className="FormularioCompra">
                <h1>{msg}</h1>
            </div>
        </div>
    )
}