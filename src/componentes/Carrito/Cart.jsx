import React,{useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import { BiLogIn } from 'react-icons/bi';
import { TbFloatLeft, TbShoppingCart } from 'react-icons/tb';
import { useCartContext } from "../../Context/CartContext";
const Cart = ()=> {

    const {cart} = useCartContext();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let total_items = cart.reduce((total, item) => total+=item.cantidad, 0);
        setTotal(total_items);
    }, [cart]);
    

    return(
<div className="d-flex ">
      <NavLink to="/Login"><BiLogIn className="HCarrito"/></NavLink>
     <NavLink to="/cart"><TbShoppingCart className="HCarrito"/> <span className="js-cart-widget-amount cart-widget-amount">{total}</span> </NavLink>  {/*Cuando no tenga productos if */}
    
  
    </div>  
    );


    }


export default Cart;


