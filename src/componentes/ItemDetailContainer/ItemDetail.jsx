import React,  { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
import { useCartContext } from "../../Context/CartContext";


const ItemDetail = ({items}) =>{
  
  const {addItem} = useCartContext();
  const [show, setShow] = useState(false);
  

  const onAdd = (quantity) => {
    setShow(true)
    addItem(items, quantity)
  }
  
return(
<div className="col-md-10 card-m">
  
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-1 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 TituloItem">{items.nombre}</strong>
          <p className="card-text Descripcion">{items.descripcion}</p>
          <p className=" text-muted PrecioItem">{items.precio} ARS</p>
          <div>

  {show === false ? (

        <ItemCount stock={items.stock} onAdd={onAdd}/> 
  ) : (
    <Link to='/cart'>Finalizar compra </Link> 
  )      
  }     
          </div>
        </div>
        <div className="col-md-6 imgDetail">
         <img className="imgDetail" src={items.foto} alt="" />
        </div>
      </div>
    </div>

);

}
export default ItemDetail;

