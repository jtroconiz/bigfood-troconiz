import React from "react";
import logo from "../../Assets/img/favicon.png"
import { TbShoppingCart } from 'react-icons/tb';
import { BiLogIn } from 'react-icons/bi';

import './Header.css';


const Header = () => {
return (

<div className="header1 ">
<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
  <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-md-center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link " href="#" >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Contacto">Contacto</a>
        </li>

        <li className="dropdown">
  <a className="btn  dropdown-toggle nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  Menu
  </a>

  <ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#Menu">Todos los productos</a></li>
    <li><a class="dropdown-item" href="#">Entradas</a></li>
    <li><a class="dropdown-item" href="#">Platos Principales</a></li>
    <li><a class="dropdown-item" href="#">Bebidas</a></li>
    <li><a class="dropdown-item" href="#">Postres</a></li>
  </ul>
</li>           
       
      </ul>
    </div>
 
   <div className="d-flex ">
      <a href="#Login"><BiLogIn className="HCarrito"/></a>
     <a href="#Carrito"><TbShoppingCart className="HCarrito"/> <span class="js-cart-widget-amount cart-widget-amount">0</span> </a>  {/*Cuando no tenga productos if */}
    
  
    </div>   
    </div>
</nav>
</div> 

)
}

export default Header;