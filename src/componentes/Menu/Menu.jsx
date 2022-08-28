import React from "react";
import ArrayMenu from "./ArrayMenu/ArrayMenu";

const Menu = () => {

    const Productos = [
        {nombre:"Hamburguesa", Precio:200},
        {nombre:"Empanada", Precio:300},
        {nombre:"Pepsi", Precio:400}]
       
return (

    <div className="Menu" id="Menu">

    <h2>Menu</h2>    
    
    <ArrayMenu Items={Productos}>


    </ArrayMenu>

    </div>

    )
}

    export default Menu;