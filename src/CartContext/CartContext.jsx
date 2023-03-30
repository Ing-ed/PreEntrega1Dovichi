import { createContext, useEffect, useState } from "react";
import { doc, updateDoc, addDoc, collection, getFirestore } from "firebase/firestore";
import { Item } from "../Components/Item";

export let CartContext = createContext();

export function CartProvider({children}){
    let [getCant,setCant] = useState(0);
    let [getProd,setProd] = useState([]);
    let [getTot, setTot] = useState(0);
    let prod = [];

    let db = getFirestore();
    let orders = collection(db,"orders")

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
    function ResetCart(){
        setProd([]);
        setCant(0);
        setTot(0);
    }
    function FinishBuy(){
        let order = {
            buyer:{
                name:"Pepe",
                phone:"000-0000000000",
                email:"pepe@example.com"
            },
            items:getProd.map((item,index) => {return({id:item.id,title:item.title,cant:item.cant})}),
            // items:getProd,
            total:getTot
        }
        console.log(order);
        addDoc(orders,order)
        .then((res) =>{
            ResetCart();
        })
    }
    // useEffect(() =>{
    //     let tot = 0
    //     getProd.map((item) =>{
    //         tot + (+item.price)*(+item.cant);
    //    })
    //    setTot(tot);
    // },[getCant])

    return(
        <CartContext.Provider value = {{cant:getCant,
                                        add:onAdd,
                                        list:getProd, Borrar :Borrar, 
                                        total : getTot, 
                                        Finish: FinishBuy,
                                        Reset:ResetCart}}>
            {children}
        </CartContext.Provider>
    )
}
