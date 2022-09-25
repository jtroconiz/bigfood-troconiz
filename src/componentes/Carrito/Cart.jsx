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
            <Link to="/"> No tienes productos selecionados, Click para Ir al menu </Link>    
            ) : (
            <CartWidget/>
        )}
        </div>
    </div>
</div>

    );

    }


export default Cart;


