import React, { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";


// array de productos
export const productos = [
    {id:1, nombre:"Hamburguesa", precio:200, stock:10, tipo: "principales", descripcion:"esto es una descripcion del producto1", foto:"https://picsum.photos/700/400?random"},
    {id:2, nombre:"Empanada", precio:300, stock:5, tipo: "desayunos", descripcion:"esto es una descripcion del producto2", foto:"https://picsum.photos/700/400?random"},
    {id:3, nombre:"Tequeños", precio:400, stock:2, tipo: "entradas", descripcion:"esto es una descripcion del producto3", foto:"https://picsum.photos/700/400?random"},
    {id:4, nombre:"Pepsi", precio:400, stock:0, tipo: "bebidas", descripcion:"esto es una descripcion del producto4", foto:"https://picsum.photos/700/400?random"}];

const ItemListContainer = () => {
    
//   promesa con delay de 3 seg   siempre resuelve  
const [item, setItem] = useState([]);
const {category} = useParams();


        
        useEffect(()=>{
            const promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(productos)
               
                }, 1000);
            })
    
            promise.then(resultado=>{
                if(category){
                    const newProducts = resultado.filter(item=>item.tipo === category);
                    setItem(newProducts);
                } else{
                    setItem(resultado);
                }
            })
        },[category])


// llamado del iten list para ser renderizado en el app
    return(
     <div className="container">
        <h1>Menu</h1>
            <ItemList  items={item} />

     </div>
        )
    }
export default ItemListContainer;