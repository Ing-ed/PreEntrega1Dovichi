import { Ok } from "./Ok";
import { Nok } from "./Nok";
import { Form } from "./Form";
import { CartContext } from "../../CartContext/CartContext"
import {useContext } from "react"
// import {useForm} from 'react-hook-form'

export function BuyerData(){
    let {showModal} = useContext(CartContext);
    //console.log(ref);

    
    let modal = {
        0: <></>,
        1: <Form/>,
        2: <Ok/>,
        3: <Nok message={"Error en la compra, vuelva a intentar mas tarde"}/>,
        4: <Nok message={"Stock insuficiente"}/>
    }

    return(
        <>
            {modal[showModal]}
        </>
    )

}