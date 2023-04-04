import { createContext, useEffect, useState } from "react";
import { doc, updateDoc, addDoc, collection, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { Item } from "../Components/Item";

export let CartContext = createContext();

export function CartProvider({children}){
    // VARIABLES Y VALORES UTILES
    let [getCant,setCant] = useState(0);
    let [getProds,setProds] = useState([]);
    let [getTot, setTot] = useState(0);
    let [getModal, setModal] = useState(0);
    let prod = [];
    let db = getFirestore();
    let orders = collection(db,"orders")

    // AGREGAR ITEMS AL CARRITO

    function onAdd(cantidad,producto){
        setCant(getCant + cantidad);
        setTot(getTot + +cantidad*(+producto.price));
        let id = producto.id;
        let index = -1
        getProds.map((item,indx) => {
            if(item.id === id){
                index = indx;
            }
        })
        // if(getProds[index].stock >? ge)
        if(index >= 0){
            getProds[index].cant += cantidad;
        } else {
            producto.cant = +cantidad;
            setProds([...getProds,producto]);
        }
    }

    //BORRAR UN ITEM DEL CARRITO (TODOS LOS QUE CORRESPONDAN A ESE PRODUCTO)
    function Delete(index){
        prod = getProds;
        setCant(getCant - +prod[index].cant)
        setTot(getTot - +prod[index].price* +prod[index].cant)
        prod.splice(index,1);
        setProds(prod);
    }

    // QUITAR UN ITEM DE LA LISTA DE COMPRA (SOLO UNO)
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
        //console.log(prod)
    }
    // BORRAR CARRITO DE COMPRAS
    function ResetCart(){
        setProds([]);
        setCant(0);
        setTot(0);
    }
    // MOSTRAR FORMULARIO DE COMPRADOR
    function HabForm(){
        setModal(1);
    }
    //OCULTAR FORMULARIO DE COMPRADOR
    function desForm(){
        setModal(0);
    }
    //FINALIZAR COMPRA
    function FinishBuy({Name,Lastname,Phone,Email,}){
        let ok = 0;
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
                ok = 1;
                return
            }
            let ref = doc(db,"items",item.id);
            updateDoc(ref,{stock:(+item.stock - +item.cant)})
            .then((res) => console.log("res",res))
            .catch((err) =>console.log(err))
        })
        console.log(order);
        if(!ok){
            addDoc(orders,order)
            .then((res) =>{
                setModal(2)
                setTimeout(() =>{
                    ResetCart();
                    setModal(0);
                },2000);
            })
            .catch((err) =>{
                setModal(3)
                setTimeout(() =>{
                    // ResetCart();
                    setModal(0);
                },2000);
            })
        } else {
            setModal(4)
                setTimeout(() =>{
                    // ResetCart();
                    setModal(0);
                },2000);
        }
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
                                        desForm:desForm,
                                        showModal:getModal}}>
            {children}
        </CartContext.Provider>
    )
}
