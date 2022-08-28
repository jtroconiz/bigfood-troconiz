import React from "react";
import './ArrayMenu.css'

const ArrayMenu = ( props ) => {
    const {

        Items,

    } = props;

    return (

        <div>
    
        {
        Items.map( (elemento) => {
            return <li className="Menu" id="Menu">
                    <h4 className="TituloItem d-flex justify-content-between"> {elemento.nombre}  <span className="badge bg-primary rounded-pill ">+</span></h4>
                    <p className="PrecioItem"> {elemento.Precio} Ars</p>
                    </li>
             })
        }

     </div>
        )
    }
    
export default ArrayMenu;