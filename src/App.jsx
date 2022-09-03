import Contacto from './componentes/Contacto/Contacto';
import Destacado from './componentes/Destacado/Destacado';
import Footer from './componentes/Footer.css/Footer';
import Header from './componentes/Header/Header';
import Intro from './componentes/Intro/Intro';
import Login from './componentes/Login/Login';
import Carrito from './componentes/Carrito/Carrito';
import Reserva from './componentes/Reserva/Reserva';
import ItemList from './componentes/ItemListContainer/ItemList/ItemList';




function App() {
  return (
    <div className=''>
      <header>
        <Header />
      </header> 
      <main>
        <Intro />    
       <ItemList/>
        <Carrito />
        <Destacado />
        <Login />
        <Reserva />
        <Contacto />
      
      </main> 
        <Footer />
    </div>
  );
}

export default App;
