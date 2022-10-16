import React from "react";
import { Link } from "react-router-dom";
// import logo from "../img/favicon.png";

const Footer = () => {

  return (

  <div className="container">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"></Link>
        <span className="mb-3 mb-md-0 text-muted">Copyrigth © 2019, Big Food. All Rights Reserved.</span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3"><a className="text-muted" target="_blank"   rel="noreferrer" href="https://jtd.com.ar/">Desarrollado por JTD</a></li>
      </ul>
    </footer>
  </div>
)
}

export default Footer;