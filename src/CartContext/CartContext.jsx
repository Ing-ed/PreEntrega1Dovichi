import { createContext, useState } from "react";
import { Item } from "../Components/Item";

export let CartContext = createContext();

export function CartProvider({children}){
    let [getCant,setCant] = useState(0);
    let [getProd,setProd] = useState([]);
    let prod = [];

    function onAdd(cantidad,producto){
        setCant(getCant + cantidad);
        producto.cant = cantidad;
        // setProd([...getProd,producto]);
        let index = getProd.indexOf(producto)
        if(index >= 0){
            getProd[index].cant += cantidad;
            console.log(getProd[index])
        } else {
            setProd([...getProd,producto]);
        }
    }
    
    function Borrar(index){
        console.log("index",index)
        setCant(getCant -1)
        prod = getProd;
        if(+prod[index].cant > 1){
            +prod[index].cant--;
        } else {
            prod.splice(index,1);
        }
        console.log(prod)
        setProd(prod);
    }

    return(
        <CartContext.Provider value = {{cant:getCant,add:onAdd,list:getProd, Borrar :Borrar}}>
            {children}
        </CartContext.Provider>
    )
}
