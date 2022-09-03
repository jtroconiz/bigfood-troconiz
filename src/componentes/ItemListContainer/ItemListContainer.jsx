// import React, { useState, useEffect } from "react";
// import ItemList from "./ItemList/ItemList";


// const ItemListContainer = () => {
//     const productos = [
//         {id:"1", nombre:"Hamburguesa", precio:200, stock:10},
//         {id:"2", nombre:"Empanada", precio:300, stock:5},
//         {id:"3", nombre:"Pepsi", precio:400, stock:0}];
      
// const [item, setItem] = useState(productos);
//     useEffect(() => {
//         const promesa = new Promise(resolve =>{
//             setTimeout(() => {
//                     resolve(productos);
//             }, 2000);
//          });
//             promesa.then(res => setItem(res)) 
//     },[])

//     return(
//      <div>
//         <h1>Hola</h1>
//      {/* <ItemList item={item} /> */}
//      </div>
//         )
//     }
// export default ItemListContainer;cl