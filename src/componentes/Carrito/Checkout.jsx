import React from "react";
import { useState } from "react";
import Form from "./Form";

const Checkout = () =>{
    const [orderID, setOrderId] =useState('');

    const handleId = (numeroDeOrden) =>{
        setOrderId(numeroDeOrden);
    };
    if (orderID){
        return (

            <h1>
            Gracias por tu compra, te dejamos el número de seguimiento:{' '}
            {orderID}
        </h1>

        );
    }

    return (
        <div>
            <Form handleId={handleId} />
        </div>
    );
};
export default Checkout;