import { createContext, useState } from "react";

export let CartContext = createContext();

export function CartProvider({children}){
    let [getCant,setCant] = useState(0);
    let [getProd,setProd] = useState([]);
    let prod = [];

    function onAdd(cantidad,producto){
        producto.cant = cantidad;
        setCant(getCant + cantidad);
        setProd([...getProd,producto]);

    }

    return(
        <CartContext.Provider value = {{cant:getCant,add:onAdd,list:getProd}}>
            {children}
        </CartContext.Provider>
    )
}
