import { createContext, useEffect, useState } from "react";
import { doc, updateDoc, addDoc, collection, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { Item } from "../Components/Item";

export let CartContext = createContext();

export function CartProvider({children}){
    let [getCant,setCant] = useState(0);
    let [getProds,setProds] = useState([]);
    let [getTot, setTot] = useState(0);
    let [getModal, setModal] = useState(0);
    let { categories } = useParams();

    // useEffect(() => {

    let prod = [];

    let db = getFirestore();
    let orders = collection(db,"orders")

    function onAdd(cantidad,producto){
        setCant(getCant + cantidad);
        setTot(getTot + +cantidad*(+producto.price));
        console.log("total",getTot)
        let id = producto.id;
        let index = -1
        getProds.map((item,indx) => {
            if(item.id === id){
                index = indx;
            }
        })
        console.log("productos",getProds);
        console.log("prod",producto)
        if(index >= 0){
            getProds[index].cant += cantidad;
            console.log(getProds[index])
        } else {
            producto.cant = +cantidad;
            setProds([...getProds,producto]);
        }
    }
    function Delete(index){
        prod = getProds;
        setCant(getCant - +prod[index].cant)
        setTot(getTot - +prod[index].price* +prod[index].cant)
        prod.splice(index,1);
        setProds(prod);
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
    function HabForm(){
        setModal(1);
    }
    function desForm(){
        setModal(0);
    }
    function FinishBuy({Name,Lastname,Phone,Email,}){
        let order = {
            buyer:{
                name:Name,
                lastname:Lastname,
                phone:Phone,
                email:Email
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
        setModal(0);
    }

    return(
        <CartContext.Provider value = {{cant:getCant,
                                        Add:onAdd,
                                        list:getProds,
                                        Borrar :Borrar,
                                        Delete:Delete,
                                        total : getTot, 
                                        Finish: FinishBuy,
                                        Reset:ResetCart,
                                        HabForm:HabForm,
                                        desForm,desForm,
                                        showModal:getModal}}>
            {children}
        </CartContext.Provider>
    )
}
