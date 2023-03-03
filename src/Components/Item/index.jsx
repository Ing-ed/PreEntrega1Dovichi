export function Item({producto}){
    
    return(
        <ul>
            <li key={`1 ${producto.id}`}><p>{producto.title}</p></li>
            <li key={`2 ${producto.id}`}><p>{producto.description}</p></li>
            <li key={`3 ${producto.id}`}><img src={producto.picture}></img></li>

        </ul>
    )
}