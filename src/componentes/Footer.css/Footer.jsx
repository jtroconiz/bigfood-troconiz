import React from "react";
// import logo from "../img/favicon.png";

const Footer = () => {
return (
<div>


<div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
     
      </a>
      <span className="mb-3 mb-md-0 text-muted">Copyrigth © 2019, Big Food. All Rights Reserved.</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-muted" Target="_blank" href="https://jtd.com.ar/">Desarrollado por JTD?</a></li>
    </ul>
  </footer>
</div>
    
  {/* <footer classNameName="">
       
            

    <div classNameName="col-md-4 d-flex align-items-center">
      <span classNameName="mb-3 mb-md-0 text-muted">2019 Bif food ©  </span>
    </div>

    </footer> */}

</div>
)
}

export default Footer;