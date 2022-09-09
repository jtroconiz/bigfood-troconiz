import React from "react";
import ItemCount from "../../../ItemCount/ItemCount";
import { Fragment } from "react";


const Item = ( {nombre, precio, stock, tipo} ) => {
// Item sera mapeado en Item count y renderizado en itemlistcontainer
 return(
    //  card de productos 
                      
                            <Fragment>         
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{nombre} </h5>
                                <p className="text-muted"><small className="text-muted">{precio} Ars</small></p>
                            </div>
                            </div>
                            <div className="col-md-4">
                            <ItemCount stock={stock}/> 
                            {/* llamada a item count y pasarle los datos del stock */}
                            </div>
                            </Fragment>
                  
 )
}
export default Item;
