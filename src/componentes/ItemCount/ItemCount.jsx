import React, {useState} from "react";
import Item from "../ItemListContainer/ItemList/Item/Item";
import ItemList from "../ItemListContainer/ItemList/ItemList";

import './ItemCount.css' 

const ItemCount = ( props ) => {
const [clicks, setClicks] = useState(1);

    return(
        <div className="ItemCount">
            <div>
                <button className="btn btn-secundary" role="button"
                onClick={ ( ) => { 
                    if ( clicks < props.stock   ) {
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
          <button className="btn btn-bf">Agregar al carrito</button>   
      
        </div>
    );
}


export default ItemCount;