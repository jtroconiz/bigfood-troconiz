import React from "react";
import logo from "../../Assets/img/favicon.png"
import { TbShoppingCart } from 'react-icons/tb';
import { BiLogIn } from 'react-icons/bi';
import { Link, NavLink } from "react-router-dom";
import './Header.css';


const Header = () => {
return (

<div className="header1 ">
<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
   
  <NavLink className="navbar-brand" to="/"><img src={logo} alt="" /> </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-md-center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link " to="/" >Home</NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Contacto">Contacto</a>
        </li>

        <li className="dropdown">
  <NavLink className="btn  dropdown-toggle nav-link" to="/menu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  Menu
  </NavLink>

  <ul class="dropdown-menu">
  <li><NavLink className="dropdown-item" to="/menu">Todos los productos</NavLink></li>
    <li><NavLink className="dropdown-item" to="/menu/entradas">Entradas</NavLink></li>
    <li><NavLink className="dropdown-item" to="/menu/principales">Platos Principales</NavLink></li>
    <li><NavLink className="dropdown-item" to="/menu/bebidas">Bebidas</NavLink></li>
    <li><NavLink className="dropdown-item" to="/menu/detail">Detalle de 1 producto</NavLink></li>
    {/* <li><a className="dropdown-item" href="#">Postres</a></li> */}
  </ul>
</li>           
       
      </ul>
    </div>
 
   <div className="d-flex ">
      <NavLink to="/Login"><BiLogIn className="HCarrito"/></NavLink>
     <NavLink to="/carrito"><TbShoppingCart className="HCarrito"/> <span className="js-cart-widget-amount cart-widget-amount">0</span> </NavLink>  {/*Cuando no tenga productos if */}
    
  
    </div>   
    </div>
</nav>
</div> 

)
}

export default Header;