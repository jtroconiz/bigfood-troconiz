import React, {useState, useEffect} from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


import './ItemCount.css' 
// contador de productos llamado por item y renderizado en itemlistcontainer
const ItemCount = ({stock, onAdd} ) => {
    
    const [clicks, setClicks] = useState(parseInt(1));
    const [itemStock, setItemStock] = useState(stock);
    const MySwal = withReactContent(Swal)



    useEffect(()=>{ 
        const getStock = () => 
            new Promise((respuesta, reject)=>{
                setTimeout(()=>{
                 
                    respuesta(stock)
                },);
            });
            getStock()
            .then((info)=>{
                setItemStock(info)
                
            })
            .catch((error)=>{
                    console.log(error)
            })
            
        },[stock] )
       

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
                        onAdd(clicks)
                       
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