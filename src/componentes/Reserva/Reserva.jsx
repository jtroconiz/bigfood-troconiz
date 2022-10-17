import React from "react";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from "../../firebaseConfig";

const Reserva = ({handleReserva}) => {
    // constantes imput
    const handleNombre = (e) => setNombre(e.target.value); 
    const handleApellido = (e) => setApellido(e.target.value);
    const handleTelefono = (e) => setTelefono(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handleFecha = (e) => setFecha(e.target.value);
    const handlePersonas = (e) => setPersonas(e.target.value);
    const handleHora = (e) => setHora(e.target.value);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [personas, setPersonas] = useState('');
    const [hora, setHora] = useState('');
    // constante confirmar compra
    const confirmarreserva = (e) => {
        e.preventDefault();
        const reserva = {
            comprador: {nombre, apellido, email, telefono, fecha, personas, hora},
            date: serverTimestamp(),
        };
        const refReserva = collection(db, 'reservar');
        addDoc(refReserva, reserva).then((res) => {
            handleReserva(res.id);
        })
    };
return(

<div className="col-md-5 col-lg-12  ">
<h5 className="mb-3">Datos de contacto </h5>
    <form className="" action="" onSubmit={confirmarreserva}>
      <div className="row g-3 justify-content-center">
        <div className="col-sm-3 align-self-center">
          <label>Nombre</label>
          <input  type="text"
                className="form-control" 
                name="nombre"
                pattern="[a-z,A-Z]{2,20}"
                value={nombre}
                onChange={handleNombre}
                required/>
        </div>

        <div className="col-sm-3">
          <label>Apellido</label>
          <input  type="text"
                name="apellido"
                pattern="[a-z,A-Z]{2,20}"
                value={apellido}
                onChange={handleApellido}
                required
                className="form-control"/>
        </div>
        <div className="row g-3 justify-content-center"></div>
        <div className="col-sm-4 align-self-center">
          <label>Fecha</label>
          <input  type="date"
                className="form-control" 
                name="fecha"
                value={fecha}
                onChange={handleFecha}
                required/>
        </div>
        <div className="col-sm-2">
          <label>Hora</label>
          <input  type="time"
                name="apellido"
              
                value={hora}
                onChange={handleHora}
                required
                className="form-control"/>
        </div>

        <div className="col-sm-1">
          <label>Personas</label>
          <input  type="number"
                name="personas"
                pattern="[0-9]{1-2}"
                value={personas}
                onChange={handlePersonas}
                required
                className="form-control"/>
        </div>
       

        <div className="col-7">
          <label >Email</label>
          <div className="input-group ">
            <span className="input-group-text">@</span>
            <input type="email"
                name="email"
                value={email}
                onChange={handleEmail}
                required
                className="form-control"/>
          </div>
        </div>
        <div className="col-7">
          <label >Telefono</label>
          <div className="input-group">
            <span className="input-group-text">#</span>
            <input type="tel"
                name="tel"
                value={telefono}
                onChange={handleTelefono}
                pattern="[0-9]{4,15}"
                required
                className="form-control"/>
          </div>
        </div>

    </div>

    
    <div className="d-flex flex-row-reverse mt-3 ">
         <button className=" btn btn-bf  ">Confirmar reserva</button> 
    </div> 
     
    </form>

</div>
);
};

export default Reserva;