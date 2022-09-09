import React, { useState, useEffect } from "react";
import { productos } from "../ItemListContainer/ItemListContainer"
import ItemDetail from "./ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    console.log(productos)
    useEffect(()=>{
        const getItem = () => 
            new Promise((respuesta, reject)=>{
                const producto = productos.find((prod) => prod.id === 1);            
                 setTimeout(()=>{
                    respuesta(producto)
                    console.log(producto)
                }, 1000);
            });
            getItem()
           
            .then((info)=>{
                
                setItem(info)
            })
            .catch((error)=>{
                console.log(error)
            })
    }, [])
return(
<div>
    <ItemDetail item={item}/>
</div>




)


}
export default ItemDetailContainer;