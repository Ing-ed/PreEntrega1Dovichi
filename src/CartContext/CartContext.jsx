import { createContext, useEffect, useState } from "react";
import { Item } from "../Components/Item";

export let CartContext = createContext();

export function CartProvider({children}){
    let [getCant,setCant] = useState(0);
    let [getProd,setProd] = useState([]);
    let [getTot, setTot] = useState(0);
    let prod = [];

    function onAdd(cantidad,producto){
        setCant(getCant + cantidad);
        setTot(getTot + +cantidad*(+producto.price));
        console.log("total",getTot)
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
        setCant(getCant -1)
        prod = getProd;
        setTot(getTot - +prod[index].price)
        if(+prod[index].cant > 1){
            +prod[index].cant--;
            setTot(getTot - (+prod[index].price));
        } else {
            setTot(getTot - (+prod[index].price));
            prod.splice(index,1);
        }
        setProd(prod);
        console.log(prod)
    }
    // useEffect(() =>{
    //     let tot = 0
    //     getProd.map((item) =>{
    //         tot + (+item.price)*(+item.cant);
    //    })
    //    setTot(tot);
    // },[getCant])

    return(
        <CartContext.Provider value = {{cant:getCant,add:onAdd,list:getProd, Borrar :Borrar, total : getTot}}>
            {children}
        </CartContext.Provider>
    )
}
