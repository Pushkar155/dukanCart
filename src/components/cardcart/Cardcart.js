import React from 'react'
import "./cardcart.css";
import { useCart } from '../../CartContext';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cardcart = ({item,name,price}) => {
    console.log(item)
    const { removeFromCart,increaseItemCount,decreaseItemCount } = useCart();
  return (
    <div className='cart_cart'>
        <div className="cart_cart_name">
            {item.title ? <h5>{item.title}</h5> : null}
            {/* {item.desno ? <h4>{item.desno}</h4> : null} */}
            <h6>{item.company}</h6>
            <h6 className='colorit'>{item.typeof}</h6>
        </div>
        
        <div className="cart_cart_price">
                <h4>₹ {item.count*item.id}</h4>
        
        </div>
        <div className="cart_cart_buttons">
        <div className="cart_cart_buttons_left">
            <button onClick={() => decreaseItemCount(item)}>-</button>
            <h4>{item.count}</h4>
            <button onClick={() => increaseItemCount(item)}>+</button>
        </div>
        <div className="cart_cart_buttons_right">
            <button onClick={() => removeFromCart(item)} ><DeleteOutlineIcon/></button>
        </div>
        </div>


    </div>
  )
}

export default Cardcart