import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { useEffect } from "react";
import "./estilo.css"

export function CartListContainer(){
    let { list } = useContext(CartContext)
    let arr = [];
    function Borrar(index){
        if(list[index].cant > "1"){
            list[index].cant = +list[index].cant--;
        } else {
            list.slice(index,1);
        }
        console.log("borrar");
    }
    useEffect(() =>{
        list.map((item, index) => {
            arr.push(
            <ul className="itemCart">
                <li key={`1 ${item.id}`}><p>{item.cant}</p></li>
                <li key={`2 ${item.id}`}><p>{item.title}</p></li>
                <li key={`3 ${item.id}`}><p>{item.description}</p></li>
                <li key = {`4 ${item.id}`}><p>${+item.price*+item.cant}</p></li>
                <li className="img" key={`5 ${item.id}`}><img src={item.picture}></img></li>
                <li className="cerrar"><buuton onClick = {()=>Borrar(index)}>Cerrar</buuton></li>
            </ul>
            )
        })
    },[])
    
    console.log( list ,"cartContainsr")
    // useEffect(() =>{
    //     for(item in list ()=>{

    //     })
    // },[])
    return(
        <div className="cartListContainer">
            {arr}
        </div>
    )
}