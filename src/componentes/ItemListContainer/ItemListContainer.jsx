import React, { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading"
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
const ItemListContainer = () => {
    

const [item, setItem] = useState([]);
const {category} = useParams();
const [loading, setLoading] = useState(true);
//   Busqueda de base de datos firestore  
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "productos");
        const queryItems = category ? query(itemsCollection, where("tipo", "==", category)) : itemsCollection;
        getDocs(queryItems).then((snapShot) => {
            if (snapShot.size > 0) {
                setItem(snapShot.docs.map(item => ({id:item.id, ...item.data()})));
                setLoading(false);
            }
        });
    }, [category]);
            
// llamado del iten list para ser renderizado en el app
    return(
     <div className="container">
        <h1>Menu</h1>
          {loading ? <Loading/> : <ItemList  items={item} /> }

     </div>
        )
    }
export default ItemListContainer;