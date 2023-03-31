import { CartWidget} from "../CartWidget"
import { useContext} from "react";
import { Link } from "react-router-dom";
import "./estilo.css";
import { CartContext } from "../../CartContext/CartContext";

//menu es un array, lo que permite añadir elemnentos de manera mas sencilla
//por cada elemento del array menu se crea una etiqueta button


export function NavBar({nombre,menu,select}){
    let {cant} = useContext(CartContext)

    let arr = []
    menu.map((item,index)=>{
        arr.push(<Link key={`${index}${item}`} to ={`/${item.replace(/\s/g,"")}/catalog`}><li ><button className="menu">{item}</button></li></Link>)
    })
    return(
        <nav >
            <Link to = "/"><h3 className="Nombre">{nombre}</h3></Link>
            <ul className="lista" >
                {arr}
            </ul>
            <CartWidget cant={cant}/>
        </nav>
    )
}