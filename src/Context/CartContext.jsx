import React, { useState, useContext } from "react";
const CartContext = React.createContext([])
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);
    // const addItem = (item, quantity) => {
    //         if (isInCart(item.id)) {
    //             setCart(
    //                 cart.map((product) => {
    //                     return product.id === item.id
    //                         ? { ...product, quantity: product.quantity + quantity }
    //                         : product;
    //                 }),
    //             );
    //         } else {
    //             setCart([...cart, { ...item, quantity}]);
    //         }
    //     };
    const addItem = (items, cantidad) => {
        if (isInCart(items.id)) {
            let producto = cart.find(x => x.id === items.id);
            cart[cart.indexOf(producto)].cantidad += cantidad;
            setCart([...cart]);
            console.log("item existente en el cart", cart)
        } else {
            setCart([...cart,  {...items, cantidad:cantidad}]);
            console.log("new item al cart", cart)
        }}


      
        console.log("Array Carrito", cart)

        const clear = () => {
            setCart([]); 
        }

        const isInCart = (id) => {
            return cart.find(product=> product.id === id);
        }
     

        const removeItem = (id) => setCart(cart.filter(product => product.id !== id ));
        const cartTotal = () => {
            return cart.reduce((total, item) => total+=item.cantidad, 0);
        }
        console.log(cartTotal)
    
        // const addItem = (item, cantidad) => {
        //     if (isInCart(item.id)) {
        //         setCart(cart.map(product =>{
        //             return product.id === item.id ? { ...product, quantity: product.quantity + quantity} : product
        //         }));
        //     } else {
        //         setCart([...cart,  {...item, quantity}]);
        //     }}
    


        // const newCart = cart.filter(producto => propuctos.id !== item.id);
        //     newCart.push({ ...item, quantity: newQuantity});
        //     setCart(newCart)
        //     console.log("carrito", cart) 



  
return(
    <CartContext.Provider value={{
        clear,
        isInCart,
        removeItem,
        addItem,
        cart
    }}>
        {children}
    </CartContext.Provider>
)
    }
    

export default CartProvider;


