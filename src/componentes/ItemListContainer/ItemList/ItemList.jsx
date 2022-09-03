import React from "react"
import Item from "./Item/Item"
import './ItemList.css'

const ItemList = ({items}) => {
// mapeo de props para ser renderizado en ItemListContainer
        return (
        
            <div>
                    {
                    items.map(item =>(
                        <div key={item.id} className="Menu" id="Menu">
                            <Item nombre={item.nombre} precio={item.precio} stock={item.stock}/>
                        </div>

                    ))} 
            </div>
            )
        }
        
export default ItemList;
