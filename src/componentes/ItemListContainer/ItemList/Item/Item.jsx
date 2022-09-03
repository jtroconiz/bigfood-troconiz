import React from "react";
import ItemCount from "../../../ItemCount/ItemCount";


const Item = ( props ) => {
    const { 

    items,

} = props;


 return(
        <div>

            
{
items.map( (elemento) => {
         return   <li key={elemento.id} className="Menu" id="Menu">
                <h4 className="TituloItem d-flex justify-content-between"> {elemento.nombre}    <ItemCount stock={elemento.stock}/> </h4>
                <p className="PrecioItem"> {elemento.precio} Ars</p>
                <p>Unidades disponibles: {elemento.stock}</p> 
            </li>
})
}

        </div>
 )
}
export default Item;






// Antes de


// import React from "react";
// import ItemCount from "../../../ItemCount/ItemCount";
// import ItemList from "../ItemList";



// const Item = ( ) => {
//     const Productos = [
//         {id:"1", nombre:"Hamburguesa", Precio:200, stock:10},
//         {id:"2", nombre:"Empanada", Precio:300, stock:5},
//         {id:"3", nombre:"Pepsi", Precio:400, stock:0}]
  
// return (
//     <div className="Menu" id="Menu">
//     <h2>Menu</h2>      
//     <ItemList  Items={Productos}>
//     </ItemList>
//     </div>
//     )
// }

//     export default Item;



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


// const Item = ( { props }) => {

//     return(
//            <div>
//                <li key={props.id} className="Menu" id="Menu">
//                    <h4 className="TituloItem d-flex justify-content-between"> {props.nombre}    <ItemCount stock={props.stock}/> </h4>
//                    <p className="PrecioItem"> {props.precio} Ars</p>
//                    <p>Unidades disponibles: {props.stock}</p> 
//                    </li>
        
//            </div>
//     )
//    }
   
//        export default Item;
   
   
   