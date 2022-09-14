import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../ItemListContainer/ItemListContainer"
import ItemDetail from "./ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {itemId} = useParams();
    
    useEffect(()=>{
        const getItem = () => 
            new Promise((respuesta, reject)=>{
                const newProduct = productos.find(item=>item.id === parseInt(itemId));
                setTimeout(()=>{
                    respuesta(newProduct)
                }, 2000);
            });
            getItem()
            .then((info)=>{
                setItem(info)
            })
            .catch((error)=>{
                    console.log(error)
            })
            
        }, [])
    console.log('itemID', item)
return(
<Fragment>
<ItemDetail item={item}/>
</Fragment>

)


}
export default ItemDetailContainer;