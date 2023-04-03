import "./estilo.css"
import { CartContext } from "../../CartContext/CartContext"
import { useContext, useEffect } from "react"
import {useForm} from 'react-hook-form'

export function BuyerData(){
    let {showModal, Finish} = useContext(CartContext);
    let {reg,err,handleSubmit} = useForm();

    function handleSub(event) {
        let datos = {}
        event.preventDefault();
        datos.Name = event.target[0].value;
        datos.Lastname = event.target[1].value;
        datos.Email = event.target[2].value;
        datos.Phone = event.target[3].value;
        Finish(datos);
    }
    function escape(event){
        console.log(event.key)
    }


    console.log(showModal,"modal")
    return(
        <>
           { showModal
            ?<div className="FormularioCompraCont">
                <form onSubmit={handleSub} className="FormularioCompra">
                    <input required = {true} type="text" placeholder="Nombre"/>
                    <input required = {true} type="text" placeholder="Apellido"/>
                    <input required = {true} type="email" placeholder="email"/>
                    <input required = {true} type="phone" placeholder="phone"/>
                    <input type="submit"/>
                    {/* <div className="FinishBuy">Terminar</div> */}
                </form>
            </div>
            :<></>}
        </>
    )
}