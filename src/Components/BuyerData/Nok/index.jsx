import { useRef } from "react"

export function Nok({message}){
    let ref = useRef("referencia")
   
    function escape(event){
        if(event.target === ref.current)
            desForm()
    }

    return(
        <div onClick={escape} ref = {ref} className="FormularioCompraCont">
            <div className="FormularioCompra">
                <h1>OOPS!! ocurrio un error</h1>
                <h1>{message}</h1>
            </div>
        </div>
    )
}