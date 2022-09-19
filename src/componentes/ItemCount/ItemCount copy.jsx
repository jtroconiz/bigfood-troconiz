import React, { useState, useEffect} from "react";
// import { CartContext } from "../../Context/CartContext";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './ItemCount.css' 

// contador de productos llamado por item y renderizado en itemlistcontainer
const ItemCount = ({onAdd, stock}) => {


const [itemStock, setItemStock] = useState(stock);
// const [counter, setCounter] = useState(props.initial);
const [count, setCount] = useState(parseInt(1));
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
                    if ( count < itemStock   ) {
                        setCount(count + 1);
                        }else 
                        setCount (count)
                    }}>+</button>    
                
                     <span>  {count} </span>
                {/* funcion de decremtar el click */}
                <button className="btn btn-secundary" 
                onClick={ () => {
                    if (1 <= count )   {
                    setCount(count - 1);
                        } else 
                        setCount (count)
                    }}>-</button>
             </div>
             {/* boton añade al carrito y disminuye el stock flotante */}
                 <button className="btn btn-bf"  
                onClick={ () => {
                    if (count <= itemStock){
                        setItemStock(itemStock - count);
                        setCount(1);
                        onAdd(count)
                       
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