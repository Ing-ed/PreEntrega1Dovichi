import { createContext, useEffect, useState } from "react";
import { doc, updateDoc, addDoc, collection, getFirestore } from "firebase/firestore";
import { Item } from "../Components/Item";

export let CartContext = createContext();

export function CartProvider({children}){
    let [getCant,setCant] = useState(0);
    let [getProds,setProds] = useState([]);
    let [getTot, setTot] = useState(0);
    let prod = [];

    let db = getFirestore();
    let orders = collection(db,"orders")

    function onAdd(cantidad,producto){
        setCant(getCant + cantidad);
        setTot(getTot + +cantidad*(+producto.price));
        console.log("total",getTot)
        producto.cant = cantidad;
        // setProds([...getProds,producto]);
        let index = getProds.indexOf(producto)
        if(index >= 0){
            getProds[index].cant += cantidad;
            console.log(getProds[index])
        } else {
            setProds([...getProds,producto]);
        }
    }
    
    function Borrar(index){
        setCant(getCant -1)
        prod = getProds;
        setTot(getTot - +prod[index].price)
        if(+prod[index].cant > 1){
            +prod[index].cant--;
            setTot(getTot - (+prod[index].price));
        } else {
            setTot(getTot - (+prod[index].price));
            prod.splice(index,1);
        }
        setProds(prod);
        console.log(prod)
    }
    function ResetCart(){
        setProds([]);
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
            items:getProds.map((item,index) => {return({id:item.id,title:item.title,cant:item.cant})}),
            // items:getProd,
            total:getTot
        }
        getProds.map((item) => {
            if(item.stock < item.cant){
                console.log("no se pudo hacer la compra, no hay stock")
                return
            }
            let ref = doc(db,"items",item.id);
            updateDoc(ref,{stock:(+item.stock - +item.cant)})
            .then((res) => console.log("res",res))
            .catch((err) => console.log(err))
        })
        // console.log(order);
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
                                        list:getProds, Borrar :Borrar, 
                                        total : getTot, 
                                        Finish: FinishBuy,
                                        Reset:ResetCart}}>
            {children}
        </CartContext.Provider>
    )
}
