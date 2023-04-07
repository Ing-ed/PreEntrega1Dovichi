
import { OkNok } from "./OkNok";
import { Form } from "./Form";
import { CartContext } from "../../CartContext/CartContext"
import {useContext } from "react"

export function BuyerData(){
    let {showModal} = useContext(CartContext);
    //console.log(ref);

    // MODAL HACE REFERENCIA AL FORMULARIO QUE SE LE MUESTRA AL USUARIO O BIEN LOS MENSAJES DE OK O NOK
    let modal = {
        0: <></>,
        1: <Form/>,
        2: <OkNok message={"Muchas gracias por su compra!!"}/>,
        3: <OkNok message={"Error en la compra, vuelva a intentar mas tarde"}/>,
        4: <OkNok message={"Stock insuficiente"}/>
    }

    return(
        <>
            {modal[showModal]}
        </>
    )

}