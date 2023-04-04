import { CartContext } from "../../../CartContext/CartContext"
import { useContext } from "react";
import { useRef } from "react"
import "./estilo.css"

export function Form(){
    let {Finish, desForm} = useContext(CartContext);
    let ref = useRef("referencia")
   
    function escape(event){
        if(event.target === ref.current)
            desForm()
    }

    function handleSub(event) {
        let datos = {}
        event.preventDefault();
        datos.Name = event.target[0].value;
        datos.Lastname = event.target[1].value;
        datos.Email = event.target[2].value;
        datos.Phone = event.target[3].value;
        Finish(datos);
    }


    return(
        <div onClick={escape} ref = {ref} className="FormularioCompraCont">
         <form onSubmit={handleSub} className="FormularioCompra">
             <input required = {true} type="text" placeholder="Nombre"/>
             <input required = {true} type="text" placeholder="Apellido"/>
             <input required = {true} type="email" placeholder="email"/>
             <input required = {true} type="phone" placeholder="phone"/>
             <input type="submit"/>
         </form>
     </div>
    )
}