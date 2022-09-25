import React, { useState, useContext } from "react";
const CartContext = React.createContext([])
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);

    const addItem = (items, cantidad) => {
        if (isInCart(items.id)) {
            let producto = cart.find(x => x.id === items.id);
            cart[cart.indexOf(producto)].cantidad += cantidad;
            setCart([...cart]);
            
        } else {
            setCart([...cart,  {...items, cantidad:cantidad}]);
           
        }}
      
        const clear = () => {
            setCart([]); 
        }

        const isInCart = (id) => {
            return cart.find(product=> product.id === id);
        }
     
        const removeItem = (id) => setCart(cart.filter(items => items.id !== id ));
        const cartTotal = () => {
            const copia = [...cart];
            let count = 0
             copia.forEach((items) => {
                count = count + items.cantidad;            
        });
        return count;
    };

    const costTotal = () => {
        const copia = [...cart];
        let cost = 0
         copia.forEach((items) => {
            cost = cost + (items.cantidad * items.precio);            
    });
    return cost;
};


return(
    <CartContext.Provider value={{
        clear,
        isInCart,
        removeItem,
        addItem,
        cartTotal,
        costTotal,
        cart,
    }}>
        {children}
    </CartContext.Provider>
)
    }
    

export default CartProvider;


