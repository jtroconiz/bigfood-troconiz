import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loading from "../Loading/Loading"
import {collection, doc, getDoc} from "firebase/firestore";
import { db } from "../../firebaseConfig";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {itemId} = useParams();
    const [loading, setLoading] = useState(true);  

//   Busqueda de base de datos firestore por id
    useEffect(() => {
        const itemCollection = collection(db, "productos");
        const ref = doc(itemCollection, itemId);
        getDoc(ref).then((datag) => {
            if (datag.exists()){
                setItem({id:datag.id, ...datag.data()});
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