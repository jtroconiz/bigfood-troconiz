import React from "react";
import ItemCount from "../../../ItemCount/ItemCount";


const Item = ( {nombre, precio, stock} ) => {
// Item sera mapeado en Item count y renderizado en itemlistcontainer
 return(
    //  card de productos 
                      <div className=" mb-3" >
                        <div className="row no-gutters">          
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{nombre} </h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="text-muted"><small className="text-muted">{precio} Ars</small></p>
                            </div>
                            </div>
                            <div className="col-md-4">
                            <ItemCount stock={stock}/> 
                            {/* llamada a item count y pasarle los datos del stock */}
                            </div>
                        </div>
                    </div>
 )
}
export default Item;
