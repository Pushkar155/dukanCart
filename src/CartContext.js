// CartContext.js
import React, { createContext, useContext, useState} from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total,setTotal] = useState(0);
  const [totalitem,setTotalitem]=useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [paid,setPaid] =useState(0);

  const addToCart = (item) => {
    if(cart.includes(item)===false){
       setCart([...cart, item]); 
       setTotal(total+item.id);
       setTotalitem(totalitem+1);
      //  window.alert("Item Added To Cart")
    }
    else{
      window.alert("Item Alredy Exist In cart")
    }
    // setCart([...cart, item]); 
    // setTotal(total+item.id)
  };
  const handelchange=(event)=>{
    setPaid(event.target.value);
  }
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const removeFromCart = (item) => {
    if(cart.length===1){
        setTotal(0);
        setTotalitem(0);
    }
    setTotal(total-(item.count*(item.id)))
    setTotalitem(totalitem-(item.count))
    setCart(cart.filter((cartItem) => cartItem.id !== item.id))
  };
  const increaseItemCount = (item) => {
    if(item.all!==1){
      const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, count: cartItem.count + 1 ,all:cartItem.all-1 } : cartItem
    );
    setCart(updatedCart);
    setTotal(total+item.id)  
    setTotalitem(totalitem+1)
    }
    else{
        window.alert(`Left ${item.all-1} In Stock`);
    }
    
  };
  const decreaseItemCount = (item) => {
    if(item.count>1){
      const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, count: cartItem.count - 1 ,all:cartItem.all +1 } : cartItem
    );
    setCart(updatedCart);
    setTotal(total-item.id)
    setTotalitem(totalitem-1)  
    }
    else{
        window.alert("Aleast Have 1 item in bill");
    }
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart,total,increaseItemCount,decreaseItemCount,totalitem , handleOptionChange,handelchange,paid,selectedOption}}>
      {children}
    </CartContext.Provider>
  );
}
