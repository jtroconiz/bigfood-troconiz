import React from "react";
import logo from "../../Assets/img/favicon.png"
import { TbShoppingCart } from 'react-icons/tb';
import { BiLogIn } from 'react-icons/bi';
import { Link } from "react-router-dom";
import './Header.css';


const Header = () => {
return (

<div className="header1 ">
<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
  <Link className="navbar-brand" to={"/"}><img src={logo} alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-md-center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link " to={"/"} >Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Contacto">Contacto</a>
        </li>

        <li className="dropdown">
  <Link className="btn  dropdown-toggle nav-link" to={"/menu"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
  Menu
  </Link>

  <ul class="dropdown-menu">
  <li><Link class="dropdown-item" to={"/menu"}>Todos los productos</Link></li>
    {/* <li><a class="dropdown-item" href="#">Entradas</a></li>
    <li><a class="dropdown-item" href="#">Platos Principales</a></li>
    <li><a class="dropdown-item" href="#">Bebidas</a></li>
    <li><a class="dropdown-item" href="#">Postres</a></li> */}
  </ul>
</li>           
       
      </ul>
    </div>
 
   <div className="d-flex ">
      <Link to={"/Login"}><BiLogIn className="HCarrito"/></Link>
     <Link to="/carrito"><TbShoppingCart className="HCarrito"/> <span class="js-cart-widget-amount cart-widget-amount">0</span> </Link>  {/*Cuando no tenga productos if */}
    
  
    </div>   
    </div>
</nav>
</div> 

)
}

export default Header;