import React from "react";
import ItemCount from "../../ItemCount/ItemCount";
import './ItemDetail.css'

const ItemDetail = ({item}) =>{

console.log("itemdetail", item)
return(
<div className="col-md-10 card-m">
  
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-1 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 TituloItem">{item.nombre}</strong>
          <p className="card-text Descripcion">{item.descripcion}</p>
          <p className=" text-muted PrecioItem">{item.precio} ARS</p>
          <div>
            <ItemCount stock={item.stock}/>
          </div>
        </div>
        <div className="col-md-6 imgDetail">
         <img className="imgDetail" src={item.foto} alt="" />
        </div>
      </div>
    </div>

);

}
export default ItemDetail;

