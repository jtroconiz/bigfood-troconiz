import React from 'react';
import Contacto from './componentes/Contacto/Contacto';
import Destacado from './componentes/Destacado/Destacado';
import Footer from './componentes/Footer.css/Footer';
import Header from './componentes/Header/Header';
import Intro from './componentes/Intro/Intro';
import Login from './componentes/Login/Login';
import Reserva from './componentes/Reserva/Reserva';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from './componentes/Carrito/Cart';
import CartProvider from './Context/CartContext';
import Checkout from './componentes/Carrito/Checkout';





function App() {
  return (

    
      <BrowserRouter >
      <CartProvider>
          <Header />
            <Routes>
              <Route exact path='/' element={<Intro/>}/>
              <Route exact path='/menu' element={<ItemListContainer/> }/>            
              <Route exact path='/category/:category' element={<ItemListContainer/> }/>
              <Route exact path='/item/:itemId' element={<ItemDetailContainer/> }/>
              <Route exact path='/cart' element={<Cart />}/>
              <Route exact path='/login' element={<Login />}/>
              {/* <Route exact path='/' element={<Intro />}/> */}
              <Route exact path='/reserva' element={ <Reserva />}/>    
              <Route exact path='/checkout' element={ <Checkout />}/> 
            </Routes>
          <Destacado />
            <Contacto /> 
          <Footer />
          </CartProvider> 
      </BrowserRouter>
    
  );
}

export default App;
