
// App.js
import React from 'react';
import { CartProvider } from './CartContext';
import ProductList from './ProductList';
import Cart from './Cart';
import PrintCard from './components/print/PrintCard';
import {Route,Routes} from "react-router-dom";
// import Print from './Print';

function App() {
  return (
    <CartProvider>
      <Routes>
      <Route exact path='/' element={<><ProductList/></>}></Route>
      <Route exact path='/cart' element={<Cart/>}></Route>
      <Route exact path='/bill' element={<PrintCard/>}></Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
