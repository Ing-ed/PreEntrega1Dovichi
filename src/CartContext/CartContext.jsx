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
        let nuevoProd = getProds.map(item => item.id).indexOf(producto.id);
        let add = () => {
            setCant(getCant + +cantidad);
            setTot(getTot + +cantidad*(+producto.price));
            console.log([...getProds,{...producto,cant:cantidad}])
            return([...getProds,{...producto,cant:cantidad}])
        }

        let act = getProds.map((item) =>{
            if(item.id === producto.id){
                if(item.cant+ cantidad <= item.stock){
                    setCant(getCant + +cantidad);
                    setTot(getTot + +cantidad*(+producto.price));
                    console.log([...getProds,{...item, cant: item.cant + +cantidad}])
                    return {...item, cant: item.cant + +cantidad}
                }
            }
            return item;
        })
        console.log(nuevoProd)
        setProds(nuevoProd >= 0? act:add)
        // if(getProds.length === 0){
        //     setProds(add);
        // } else {
        //     setProds(act);
        // }
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
        let nok = 0;
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
                nok = 1;
                return
            }
            let ref = doc(db,"items",item.id);
            updateDoc(ref,{stock:(+item.stock - +item.cant)})
            .then((res) => {
                addDoc(orders,order)
                .then(()=>{
                    setModal(2);
                    setTimeout(() =>{
                        ResetCart();
                        setModal(0);
                    },2000);
                })
                .catch(() =>{
                    setModal(3);
                    setTimeout(() => setModal(0),2000);
                })
            })
        })
        if(nok){
            setModal(4)
            setTimeout(() =>setModal(0),2000);
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
