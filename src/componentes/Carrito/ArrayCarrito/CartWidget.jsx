import React from "react";
import { useCartContext } from "../../../Context/CartContext";
const CartWidget = ()=> {
     const { cartTotal, cart, removeItem, clear, costTotal  } = useCartContext();

 return(   
 <div>
    <div>
    <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
          <div>
            <p className="mb-0"><span className="text-muted">Total unidades: {cartTotal()}</span> <a href="#!" className="text-body"> <i
                  className="fas fa-angle-down mt-1"></i></a></p>
          </div>
        </div>
        {cart.map((producto) => (
        <div key={producto.id} className="card rounded-3 mb-4">
          <div className="card-body p-4">
            <div className="row d-flex justify-content-between align-items-center">
           
              <div className="col-md-3 col-lg-3 col-xl-3">
                <p className="lead fw-normal mb-2">{producto.nombre}</p>
                <p><span className="text-muted">Unidades: </span> {producto.cantidad}</p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                {/* <h5 className="mb-0">{producto.precio}Ars</h5> */}
                <h6 className="mb-0">Total: {producto.precio * producto.cantidad} Ars</h6>
              </div>
              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                    <button onClick={()=>removeItem(producto.id)}>Eliminar producto</button>
              </div>
            </div>
          </div>
        </div>
        ))}

        </div>
    <div>
            <h1>Costo total:{costTotal()}</h1>
        <button className="btn btn-bf" > Finalizar compra</button>
        <p></p>
        <button className="btn btn-bf" onClick={()=> clear()} > Vaciar el carrito</button>
</div>
</div>
);

}


export default CartWidget;
