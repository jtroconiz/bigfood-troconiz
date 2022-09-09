import React, { Fragment } from "react"
import Item from "./Item/Item"
import './ItemList.css'

const ItemList = ({items}) => {
// mapeo de props para ser renderizado en ItemListContainer
        return (
        
            <Fragment>
                    {
                    items.map(item =>(
                        <li key={item.id} className="Menu row no-gutters mb-3" id={item.tipo}>
                            <Item nombre={item.nombre} precio={item.precio} stock={item.stock} tipo={item.tipo}/>
                        </li>

                    ))} 
            </Fragment>
            )
        }
        
export default ItemList;
