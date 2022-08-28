import React from "react";
// import imglogin from "../img/20220610_172007.jpg"

const Login = () => {
return (

<section className="vh-100" id="Login"> 
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-10">
                <div className="card" >
                  <div className="row g-0">
                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                      {/* <img src={imglogin}
                        alt="login form" className="img-fluid" /> */}
                    </div>
                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                      <div className="card-body p-4 p-lg-5 text-black">
        

                        <form id="loginform">
                          <div className="d-flex align-items-center pb-1">
                        
                            <span className="h1 fw-bold mb-0">Big Food </span>
                          </div>
        
                             <h5 className=" mb-0 pb-1" >Hola! Bienvenido al inicio de seccion de clientes de Big Food</h5>
        
                          <div className="form-outline mb-0">
                            <label className="form-label" for="exampleInputEmail1">Ingresa tu correo electronico</label>
                            <input type="email" id="mail" className="form-label form-control form-control-md" placeholder="@" pattern=".{3,}" required />
                            
                          </div>
 
                      
                          <div className="form-outline mb-0">
                            
                            <label className="form-label" for="exampleInputPassword1">Ingresa tu contraseña, minimo 6 caracteres</label>
                            <input for="exampleInputPassword1" type="password" className="form-control form-control-md" id="contrasena" pattern=".{6,}"/>
                          </div>
             

                          <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">No cerrar sesión</label>
                          </div> 
                      
                          
                          <div className="pt-1 mb-0">
                            <button className="btn btn-dark btn-md btn-block " type="submit">Login</button>
                          </div> 
  
                          <p className="mb-0 pb-lg-2" >No tienes cuenta? <a href="newuser.html">Registrate acá </a></p> 
                         
                        </form>
  

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>








)
}

export default Login;