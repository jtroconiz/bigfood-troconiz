
import React from "react";


const Contacto = () => {
return (


<div className="container">
    <div className="col-12 col-small ">
        <h5>Sobre nosotros</h5>
        <p>Te invito a conocer los sabores y colores de nuestra propuesta gastronómica los cuales se combinan con un ambiente increíble para disfrutar de buenos momentos, en nuestro menu encontrá una selección de platos deliciosos. Que esperas, veni a visitarnos?</p>
      </div>
    <div className="row justify-content-md-center">
  
      <div className="col-4 col-md" id="Contacto">
        <h5>Ubicacion</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a Target="_blank" className="" href="https://g.page/big-food-palermo?share">Malabia 1893, CABA Argentina <p>Plaza Armenia</p></a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Futuro mapa</a></li>
         
        </ul>
      </div>
      <div className="col-4 col-md">
        <h5>Contacto</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="ColorP text-decoration-none" Target="_blank" href="https://www.instagram.com/bigfood.ar/"><i  className="bi bi-instagram"></i> seguinos @bigfood.ar </a> <p>Cualquier duda escribinos por instagram y te responderemos a la brevedad</p> </li>
          <li className="mb-1"><a className="ColorP text-decoration-none" Target="_blank" href="mailto:bigfoodsdifital@bigfoods.com"><i class="bi bi-envelope-open-heart"></i>   bigsbooddigital@gmail.com </a>  </li>
          <br />
          <li className="mb-1"><a className="ColorP text-decoration-none" Target="_blank" href=""><i class="bi bi-telephone-outbound"></i> 555555 </a>  </li>
   
        </ul>
      </div>
     
    </div>
    </div>
)
}

export default Contacto;



