import { createContext, useState } from "react";

export let CartContext = createContext();

export function CartProvider({children}){
    let [getCant,setCant] = useState(0);
    return(
        <CartContext.Provider value = {{cant:getCant}}>
            {children}
        </CartContext.Provider>
    )
}
