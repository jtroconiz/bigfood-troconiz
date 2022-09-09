
import React from "react";
import { Link } from "react-router-dom";


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
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13138.388121519969!2d-58.4243136!3d-34.5890616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4b157027254e4c3f!2sBig%20Food!5e0!3m2!1ses!2sar!4v1661716748891!5m2!1ses!2sar" ></iframe></a></li>

         
        </ul>
       
      </div>
      <div className="col-4 col-md">
        <h5>Contacto</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="ColorP text-decoration-none" Target="_blank" href="https://www.instagram.com/bigfood.ar/"><i  className="bi bi-instagram"></i> seguinos @bigfood.ar </a> <p>Cualquier duda escribinos por instagram y te responderemos a la brevedad</p> </li>
          <li className="mb-1"><a className="ColorP text-decoration-none" Target="_blank" href="mailto:bigfoodsdifital@bigfoods.com"><i class="bi bi-envelope-open-heart"></i>   bigsbooddigital@gmail.com </a>  </li>
          <br />
          <li className="mb-1"><a className="ColorP text-decoration-none" Target="_blank" href=""><i className="bi bi-telephone-outbound"></i> 555555 </a>  </li>
   
        </ul>
      </div>
     
    </div>
    </div>
)
}

export default Contacto;



