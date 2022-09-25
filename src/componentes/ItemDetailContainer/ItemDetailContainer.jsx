import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";
import Loading from "../Loading/Loading"
import {doc, getDoc, getFirestore} from "firebase/firestore";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {itemId} = useParams();
    const [loading, setLoading] = useState(true);  

//   Busqueda de base de datos firestore por id
    useEffect(() => {
        const db = getFirestore();
        const response = doc(db, "productos", itemId);
        getDoc(response).then((datag) => {
            if (datag.exists()){
                setItem({id:datag.id, ...datag.data()});
                console.log({id:datag.id, ...datag.data()});
                setLoading(false);
            }
        });
    }, [itemId]);
   
return(
<Fragment>

{loading ? <Loading/> : <ItemDetail items={item}/> }

</Fragment>

)


}
export default ItemDetailContainer;