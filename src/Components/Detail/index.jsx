export function Detail({producto}){
    return(
        <>
        <div>
                <li key={`1 ${producto.id}`}><p>{producto.title}</p></li>
                <li key={`2 ${producto.id}`}><p>{producto.description}</p></li>
                <li key={`3 ${producto.id}`}><img src={producto.picture}></img></li>
            </div>
            <input type="number" onChange={handleCng} placeholder = {getCant}></input>
            <button onClick={() => add(Number(getCant),producto)}>Agregar a carrito</button>
        </>
    )
}