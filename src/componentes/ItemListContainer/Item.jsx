import React from "react";
// import ItemCount from "../../../ItemCount/ItemCount";

import { Link } from "react-router-dom";

const Item = ( {nombre, precio, id} ) => {
// Item sera mapeado en Item count y renderizado en itemlistcontainer
 return(
    //  card de productos 
    <div className="col-md-10">
    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-1 shadow-sm h-md-250 position-relative">
    
      <div className="col p-4 d-flex flex-column position-static card-tittle">
      <Link to={`/item/${id}`}> 
        <strong className="d-inline-block mb-2 text-primary card-title">{nombre}</strong>
        <div className="mb-1 text-muted">{precio} ARS</div>
        </Link>
      </div>
       

      {/* Luego de la entrega se activa <div className="col-md-4 ">
      <ItemCount stock={stock}/> 
      </div> */}
    </div>
    
  </div>
             
                         
 )
}
export default Item;
