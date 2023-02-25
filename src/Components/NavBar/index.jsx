export function NavBar({nombre,menu}){
    let estilo = {
        nav:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between'
        },
        lista:{
            display:'flex',
            flexDirection:'row',
            listStyle:'none'
        }
    }
    let arr = []
    menu.map(item=>{
        arr.push(<li><button>{item}</button></li>)
    })
    return(
        <nav style={estilo.nav}>
            <h3>{nombre}</h3>
            <ul style={estilo.lista}>
                {arr}
            </ul>
        </nav>
    )
}