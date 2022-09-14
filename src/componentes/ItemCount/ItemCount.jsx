import React, {useState} from "react";
import { useEffect } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


import './ItemCount.css' 
// contador de productos llamado por item y renderizado en itemlistcontainer
const ItemCount = ( item ) => {


const [clicks, setClicks] = useState(parseInt(1));
const [itemStock, setItemStock] = useState(item.stock);
const MySwal = withReactContent(Swal)
console.log(typeof(item.stock))
console.log(item.stock)
console.log('itemstck inicial',itemStock)

    useEffect(()=>{
        const getStock = () => 
            new Promise((respuesta, reject)=>{
                setTimeout(()=>{
                    console.log(item.stock)
                    respuesta(item.stock)
                },);
            });
            getStock()
            .then((info)=>{
                setItemStock(info)
                console.log('then',info)
            })
            .catch((error)=>{
                    console.log(error)
            })
            
        },[item.stock] )
        console.log(typeof(itemStock))
        console.log('fuera de la promise',itemStock)

    return(
        
        <div className="ItemCount">
           
            <div className="ItemCoun">
                {/* funcion de invrementar el click */}
                <button className="btn btn-secundary" 
                onClick={ ( ) => { 
                    if ( clicks < itemStock   ) {
                        setClicks(clicks + 1);
                        }else 
                        setClicks (clicks)
                    }}>+</button>    
                
                     <span>  {clicks} </span>
                {/* funcion de decremtar el click */}
                <button className="btn btn-secundary" 
                onClick={ () => {
                    if (1 <= clicks )   {
                    setClicks(clicks - 1);
                        } else 
                        setClicks (clicks)
                    }}>-</button>
             </div>
             {/* boton añade al carrito y disminuye el stock flotante */}
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
                              // Aviso cuando se agota el stock y se quiere añadir en el carrito
                              MySwal.showLoading()
                                
                            },
                          })
                    }
                    }}>Agregar al carrito    </button>   

                    <div>Unidades disponibles = {itemStock}</div>
       {/* llamada al itemStock que es el stock flotante para renderizarlo */}
        </div>
    );
}


export default ItemCount;