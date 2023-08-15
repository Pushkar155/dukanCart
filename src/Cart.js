import { useCart } from './CartContext';
// import { useState } from 'react';
import "./cart.css";
import Cardcart from './components/cardcart/Cardcart';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import PrintCard from './components/print/PrintCard';
import {NavLink} from "react-router-dom";

// import

function Cart() {
  const { cart,total,totalitem,handleOptionChange,handelchange} = useCart();

  return (
    <div className='cart'>
        <div className="cart_navbar">
            <NavLink to="/" className="nav-link" > {<HomeIcon/>} </NavLink>
            <h1>Cart</h1>
            <div className="cart_navbar_2nd">
              <ShoppingCartIcon/>
              <h6>{totalitem}</h6>
            </div>
        </div>
      
        <div className="cart_item">
            {cart.map((item) => (
                <Cardcart className="hello" name={item.name} price={item.price} item={item}/>
                ))}
        </div>
        <div className="cart_total">
          <div className="cart_total_up">
            <h3>₹ {total}</h3>
            <NavLink to="/bill" className="nav-link" > 
              <h5 className='dexineit'>Print Bill</h5>
            </NavLink>
          </div>
          <div className="cart_total_down">
            <div className="cart_total_down_feature1">
              {/* <h6>Payment Options :</h6> */}
              <select id="options" onChange={handleOptionChange}>
                <option value="option1">Cash</option>
                <option value="option2">Upi</option>
                <option value="option3">Cheque</option>
              </select>
            </div>

            <div className="alin">
              <div className="cart_total_down_feature">
              <h5>Name</h5>
              <input type="text" placeholder='Pushkar Chaubey'/>
              
            </div>
            <div className="cart_total_down_feature">
              <h5> Paid ₹</h5>
              <input type="number" placeholder='₹ 10,000' onChange={handelchange} />
            </div>
            </div>
            

            
            
            
            {/* {console.log(paid)} */}


          </div>
  
        </div>
    </div>
  );
}

export default Cart;

