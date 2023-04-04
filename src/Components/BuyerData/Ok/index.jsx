import { useRef } from "react"

export function Ok({message}){
    
    let ref = useRef("referencia")
   
    function escape(event){
        if(event.target === ref.current)
            desForm()
    }

    return(
        <div onClick={escape} ref = {ref} className="FormularioCompraCont">
            <div className="FormularioCompra">
                <h1>{message}</h1>
            </div>
        </div>
    )
}