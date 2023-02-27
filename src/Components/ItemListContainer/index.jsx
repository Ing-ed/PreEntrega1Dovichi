export function ItemListContainer({greeting}){
    let estilo ={
        display:'flex',
        justifyContent:'center'
    }
    return(
        <div style={estilo}>
            <h1>{greeting}</h1>
        </div>
    )
}