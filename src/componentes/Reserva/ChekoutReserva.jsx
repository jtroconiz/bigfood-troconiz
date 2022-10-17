import React from "react";
import { useState } from "react";
import Reserva from "./Reserva";

const CheckoutReserva = () =>{
    const [reservaID, setReservaID] =useState('');

    const handleReserva = (numeroDeReserva) =>{
        setReservaID(numeroDeReserva);
        
    };
    if (reservaID){
        return (

            <h1>
            Gracias por tu reserva, Te enviaremos un e-mail de confirmación. 
        </h1>

        );
    }

    return (
        <div>
            <Reserva handleReserva={handleReserva} />
        </div>
    );
};
export default CheckoutReserva;