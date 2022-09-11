import Contacto from './componentes/Contacto/Contacto';
import Destacado from './componentes/Destacado/Destacado';
import Footer from './componentes/Footer.css/Footer';
import Header from './componentes/Header/Header';
import Intro from './componentes/Intro/Intro';
import Login from './componentes/Login/Login';
import Carrito from './componentes/Carrito/Carrito';
import Reserva from './componentes/Reserva/Reserva';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';




function App() {
  return (
    <BrowserRouter >

        <Header />
          <Routes>
            <Route exact path='/' element={<ItemListContainer/> }/>            
            <Route exact path='/category/:category' element={<ItemListContainer/> }/>
            <Route exact path='/item/:itemId' element={<ItemDetailContainer/> }/>
            <Route exact path='/carrito' element={<Carrito />}/>
            <Route exact path='/login' element={<Login />}/>
            {/* <Route exact path='/' element={<Intro />}/> */}
            <Route exact path='/reserva' element={ <Reserva />}/>    
          </Routes>
        <Destacado />
          <Contacto /> 
         <Footer />
          

    
    </BrowserRouter>
  );
}

export default App;
