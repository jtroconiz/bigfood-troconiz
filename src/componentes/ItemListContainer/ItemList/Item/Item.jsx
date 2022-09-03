import React from "react";
import ItemCount from "../../../ItemCount/ItemCount";


const Item = ( {items} ) => {



 return(
        <div>

            
{
items.map( (items) => {
         return   <li key={items.id} className="Menu" id="Menu">
                      <div className=" mb-3" >
                        <div className="row no-gutters">          
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{items.nombre} </h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="text-muted"><small className="text-muted">{items.precio} Ars</small></p>
                            </div>
                            </div>
                            <div className="col-md-4">
                            <ItemCount stock={items.stock}/>
                            </div>
                        </div>
                    </div>
          {/* // <h4 className="TituloItem d-flex justify-content-between"> {items.nombre}    <ItemCount stock={items.stock}/> </h4>
// <p className="PrecioItem"> {items.precio} Ars</p>
// {/* <p>Unidades disponibles: {items.precio={ <ItemCount {items.precio}/> }</p>  
/</li> */}
          
          
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
   
   
   


// return   <li key={items.id} className="Menu" id="Menu">


// <div class="card mb-3" style="max-width: 540px;">
// <div class="row no-gutters">
//     <div class="col-md-4">
//     <img src="..." class="card-img" alt="...">
//     </div>
//     <div class="col-md-8">
//     <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//         <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//     </div>
//     </div>
// </div>
// </div>
// <h4 className="TituloItem d-flex justify-content-between"> {items.nombre}    <ItemCount stock={items.stock}/> </h4>
// <p className="PrecioItem"> {items.precio} Ars</p>
// {/* <p>Unidades disponibles: {items.precio={ <ItemCount {items.precio}/> }</p>  */}
// </li>