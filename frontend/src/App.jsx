import './App.css';
import { Routes, Route } from 'react-router-dom';
import Netflix from './Netflix';
import About from './About';
import Contact from './Contact';
import Cart from './Cart';
import Favourite from './Favourite';


function App() {
 return(
   <Routes>
       <Route path='/' element={<Netflix/>}></Route>
       <Route path='/about' element={<About/>}></Route>
       <Route path='/contact' element={<Contact/>}></Route>
       <Route path='/cart' element={<Cart/>}></Route>
       <Route path='/favourite' element={<Favourite/>}></Route>
   </Routes>
 )
}

export default App;
