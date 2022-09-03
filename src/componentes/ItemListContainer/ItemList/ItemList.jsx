import React from "react"
import Item from "./Item/Item"
import './ItemList.css'

const ItemList = () => {
   const Productos = [
                {id:"1", nombre:"Hamburguesa", precio:200, stock:10},
                {id:"2", nombre:"Empanada", precio:300, stock:5},
                {id:"3", nombre:"Pepsi", precio:400, stock:0}];
          
        return (
            <div className="Menu" id="Menu">
            <h2>Menu</h2>      
            <Item items={Productos}>
   
            </Item> 
            </div>
            )
        }
        
 export default ItemList;




// // after OJO ////
// import React from "react"
// import Item from "./Item/Item";

// import './ItemList.css'


// // const ItemList = ({props}) => {
// const ItemList = ( props ) => {
// const { 

//     item,

// } = props;


//  return(
//     <div>
    
//     {item.map(elemento => (
//     <div key={elemento.id}>
//         <Item nombre={elemento.nombre} stock={elemento.stock} precio={elemento.precio}/>
//     </div>)
//      ) }
//     </div>
//     )
//  }
      
// export default ItemList;
// /// hasta aqui after ////


// const ItemList = ( props ) => {
// const { 
    
//     Items,

// } = props;
//  return(
// <div>
// {
//     Items.map( (elemento) => {
//         return <li key={elemento.id} className="Menu" id="Menu">
//                 <h4 className="TituloItem d-flex justify-content-between"> {elemento.nombre}    <ItemCount stock={elemento.stock}/> </h4>
//                 <p className="PrecioItem"> {elemento.Precio} Ars</p>
//                 <p>Unidades disponibles: {elemento.stock}</p> 
//                 </li>
//          }) 
//     }
//     </div>
//  );


















// antes de



// import React from "react"
// import ItemCount from "../../ItemCount/ItemCount";


// import './ItemList.css'

// const ItemList = ( props ) => {
// const { 
    
//     Items,

// } = props;
//  return(
// <div>
// {
//     Items.map( (elemento) => {
//         return <li key={elemento.id} className="Menu" id="Menu">
//                 <h4 className="TituloItem d-flex justify-content-between"> {elemento.nombre}    <ItemCount stock={elemento.stock}/> </h4>
//                 <p className="PrecioItem"> {elemento.Precio} Ars</p>
//                 <p>Unidades disponibles: {elemento.stock}</p> 
//                 </li>
//          }) 
//     }
//     </div>
//  );
// }

// export default ItemList;


