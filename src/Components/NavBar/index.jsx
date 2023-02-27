import { CartWidget} from "../CartWidget"
// import { Button } from "../Button";

//menu es un array, lo que permite añadir elemnentos de manera mas sencilla
//por cada elemento del array menu se crea una etiqueta button


export function NavBar({nombre,menu,select}){
    let clicked = false;
    // let color = '#FFFF00'
    let estilo = {
        nav:{
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'space-between',
            padding:'10px'
        },
        lista:{
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap',
            listStyle:'none',
            justifySelf:'center',
            gap:'20px'
        },
        boton:{
            border:'none',
            // color:'red'
        }
    }
    function onClick(){
        
    }
    let arr = []
    menu.map(item=>{
        arr.push(<li><button style={estilo.boton}>{item}</button></li>)
    })
    return(
        <nav style={estilo.nav}>
            <h3>{nombre}</h3>
            <ul style={estilo.lista}>
                {arr}
            </ul>
            <CartWidget cant={20}/>
        </nav>
    )
}