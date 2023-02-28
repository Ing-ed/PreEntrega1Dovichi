import { useState, useEffect } from "react";

export function Button({item,hijoAPadre}){
    let estilo = {
        border:'none'
    }
    return(
        <button style={estilo}>{item}</button>
    )
}