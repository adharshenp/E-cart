import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import './bootstrap.min.css'
import Foooter from './components/Foooter';
import Header from './components/Header';

function App() {
  return (

    <div>
    <Header/>
    
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/cart'element={ <Cart/>}/>
      <Route path='/wishlist'element={ <Wishlist/>}/>
      
   
  
      
    
   </Routes>
   <Foooter/>
   </div>
  );
}

export default App;
