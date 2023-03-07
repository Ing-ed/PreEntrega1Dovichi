import { ItemDetail } from "../ItemDetail";
import { useEffect,useState } from "react";

export function ItemDetailContainer(){
    return(
        <div className="itemDetCont">
            <ItemDetail></ItemDetail>
        </div>
    )
}