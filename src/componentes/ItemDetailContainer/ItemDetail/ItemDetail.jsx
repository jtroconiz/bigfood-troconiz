import React from "react";
import ItemCount from "../../ItemCount/ItemCount";


const ItemDetail = ({ item }) =>{


return(
    <li>         
    <div className="col-md-8">
    <div className="card-body">
        <h5 className="card-title">{item.nombre} </h5>
        <p className="card-text">{item.descripcion}</p>
        <p className="text-muted"><small className="text-muted">{item.precio} Ars</small></p>
    </div>
    </div>
    <div className="col-md-4">
    <ItemCount stock={item.stock}/> 
    {/* llamada a item count y pasarle los datos del stock */}
    </div>
    </li>

)

}
export default ItemDetail;