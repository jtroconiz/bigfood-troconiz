import React from "react";
import pic1 from "../../Assets/img/Header/20200904_210235.jpg"
import pic2 from "../../Assets/img/Header/20220825_141755.jpg"
import pic3 from "../../Assets/img/Header/Big Foods - 23.jpg"
import pic4 from "../../Assets/img/Header/Big Foods - 42.jpg"
import pic5 from "../../Assets/img/Header/DAIQUIRI.jpg"
import './Intro.css'
// import pic1 from "../img/Big Foods - 15.jpg";
// import pic2 from "../img/Big Foods - 23.jpg";
// import pic3 from "../img/Big Foods - 25.jpg";
// import pic4 from "../img/Big Foods - 42.jpg";

const Intro = () => {
return (

    <div id="carouselExampleCaptions" className="carousel slide  "  data-bs-ride="carousel" >
  <div className="carousel-indicators " >
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div className="carousel-inner  ">
    <div className="carousel-item active " data-bs-interval="2000"> 
      <img src={pic1} className="d-block " alt="..."/>
      {/* <div className="carousel-caption d-none d-md-block ">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div> */}
    </div>
    <div className="carousel-item " data-bs-interval="2000">
      <img src={pic2} className="d-block " alt="..."/>
      {/* <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div> */}
    </div>
    <div className="carousel-item " data-bs-interval="2000">
      <img src={pic3} className="d-block" alt="..."/>
      {/* <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div> */}
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={pic4} className="d-block " alt="..."/>
      {/* <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div> */}
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={pic5} className="d-block " alt="..."/>
      {/* <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div> */}
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="ColorP">Anterior</span>
    <span className="carousel-control-prev-icon " aria-hidden="true"></span>
   
  </button>
  <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className=" carousel-control-next-icon " ></span>
    <span className="ColorP">Siguiente</span>
  </button>
</div>

)
}

export default Intro;