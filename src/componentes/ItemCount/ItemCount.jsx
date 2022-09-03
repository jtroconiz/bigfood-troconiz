import React, {useState} from "react";
import Item from "../ItemListContainer/ItemList/Item/Item";
import ItemList from "../ItemListContainer/ItemList/ItemList";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


import './ItemCount.css' 

const ItemCount = ( props ) => {
const [clicks, setClicks] = useState(1);
const [itemStock, setItemStock] = useState(props.stock);
const MySwal = withReactContent(Swal)

// console.log(props.stock)
console.log(itemStock)
    return(
        
        <div className="ItemCount">
           
            <div className="ItemCoun">
                <button className="btn btn-secundary" role="button"
                onClick={ ( ) => { 
                    if ( clicks < itemStock   ) {
                        setClicks(clicks + 1);
                        }else 
                        setClicks (clicks)
                    }}>+</button>    
                
                     <span>  {clicks} </span>

                <button className="btn btn-secundary" role="button"
                onClick={ () => {
                    if (1 <= clicks )   {
                    setClicks(clicks - 1);
                        } else 
                        setClicks (clicks)
                    }}>-</button>
             </div>
                 <button className="btn btn-bf"  
                onClick={ () => {
                    if (clicks <= itemStock){
                        setItemStock(itemStock - clicks);
                        setClicks(1);
                      
                    }
                    else {
                        MySwal.fire({
                            title: <p>Se agoto el Stock</p>,
                            didOpen: () => {
                              // Avso cuando se agota el stock
                              MySwal.showLoading()
                                
                            },
                          })
                    }
                    }}>Agregar al carrito    </button>   

                    <div>Unidades disponibles = {itemStock}</div>
        {/* <Item stockonline={itemStock}/> */}
        </div>
    );
}


export default ItemCount;