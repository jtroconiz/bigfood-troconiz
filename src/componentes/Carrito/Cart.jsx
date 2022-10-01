import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import CartWidget from "./ArrayCarrito/CartWidget";

const Cart = ()=> {
    const { cartTotal } = useCartContext();
 
    return(

  <div className="container h-100 py-5">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-10">
        {cartTotal() === 0 ? (
            <Link to="/"> 
  <h3> Tu carrito está vacío </h3 >
 <h4> ¿No sabés qué comer? ¡Nuestros platos te esperan! </h4>
 <p>Click para seguir comprando </p> </Link>    
            ) : (
            <CartWidget/>
        )}
        </div>
    </div>
</div>

    );

    }


export default Cart;


