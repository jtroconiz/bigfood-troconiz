import React from "react";
import { useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from "../../firebaseConfig";

const Form = ({handleId}) => {

    const {costTotal,  cart, clear} = useCartContext();
    // constantes imput
    const handleNombre = (e) => setNombre(e.target.value); 
    const handleApellido = (e) => setApellido(e.target.value);
    const handleTelefono = (e) => setTelefono(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const total = costTotal();
    // constante confirmar compra
    const confirmar = (e) => {
        e.preventDefault();
        const orden = {
            comprador: {nombre, apellido, email, telefono },
            date: serverTimestamp(),
            cart,
            total,
        };
        const refOrden = collection(db, 'orders');
        addDoc(refOrden, orden).then((res) => {
            handleId(res.id);
       
            clear();
        });
    };

return(

<div className="col-md-5 col-lg-12  ">
<h5 className="mb-3">Datos de contacto </h5>
    <form className="" action="" onSubmit={confirmar}>
      <div className="row g-3 justify-content-center">
        <div className="col-sm-4 align-self-center">
          <label>Nombre</label>
          <input  type="text"
                className="form-control" 
                name="nombre"
                pattern="[a-z,A-Z]{2,20}"
                value={nombre}
                onChange={handleNombre}
                required/>
        </div>

        <div className="col-sm-4">
          <label>Apellido</label>
          <input  type="text"
                name="apellido"
                pattern="[a-z,A-Z]{2,20}"
                value={apellido}
                onChange={handleApellido}
                required
                className="form-control"/>
        </div>

        <div className="col-8">
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
        <div className="col-8">
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
         <button className=" btn btn-bf  ">Confirmar compra</button> 
    </div> 
     
    </form>

</div>
);
};
export default Form;