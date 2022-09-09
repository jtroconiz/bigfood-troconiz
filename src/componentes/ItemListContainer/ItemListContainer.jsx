import React, { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";


// array de productos
export const productos = [
    {id:1, nombre:"Hamburguesa", precio:200, stock:10, tipo: "principales", descripcion:"esto es una descripcion"},
    {id:2, nombre:"Empanada", precio:300, stock:5, tipo: "desayuno", descripcion:"esto es una descripcion"},
    {id:3, nombre:"tequeños", precio:400, stock:2, tipo: "entradas", descripcion:"esto es una descripcion"},
    {id:4, nombre:"Pepsi", precio:400, stock:0, tipo: "bebidas", descripcion:"esto es una descripcion"}];

const ItemListContainer = () => {
  

//   promesa con delay de 3 seg   siempre resuelve  

const {categoria} = useParams();
const [item, setItem] = useState([]);
    useEffect(() => {
        const getProducts = () =>
             new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos);
                
            }, 1000);
         });

        getProducts()
         .then((data) => {
            
                setItem(data);
         })
         .catch((error) => {
            console.log(error);
        })

        }, []);
        // if (categoria) {
        //     getProducts.then(res => setItem(res.filter(producto => producto.category == categoria)));
        //         console.log(setItem)
        // } else {
        //     getProducts.then(res => setItem(res)) 
        // console.log(setItem)
        //     }
        // }, [])
// llamado del iten list para ser renderizado en el app
    return(
     <div>
        <h1>Menu</h1>
            <ItemList  items={item} />

     </div>
        )
    }
export default ItemListContainer;