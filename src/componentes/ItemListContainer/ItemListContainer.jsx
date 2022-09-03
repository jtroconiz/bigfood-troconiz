import React, { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";

// array de productos
const ItemListContainer = () => {
    const productos = [
        {id:"1", nombre:"Hamburguesa", precio:200, stock:10},
        {id:"2", nombre:"Empanada", precio:300, stock:5},
        {id:"3", nombre:"Pepsi", precio:400, stock:0}];
//   promesa con delay de 3 seg   siempre resuelve  
const [item, setItem] = useState([]);
    useEffect(() => {
        const promesa = new Promise(resolve =>{
            setTimeout(() => {
                    resolve(productos);
            }, 3000);
         });
            promesa.then(res => setItem(res)) 
    },)
// llamado del iten list para ser renderizado en el app
    return(
     <div>
        <h1>Menu</h1>
        <li>
            <ItemList items={item} />
        </li>
     </div>
        )
    }
export default ItemListContainer;