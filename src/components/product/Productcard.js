import React from 'react';
import "./productcard.css";
import { useCart } from '../../CartContext';
// import AddBoxIcon from '@mui/icons-material/AddBox';
import AddIcon from '@mui/icons-material/Add';

const Productcard = ({item}) => {
    const { addToCart } = useCart();
  return (
        <div className='pro_cart_cart'>
        <div className="pro_cart_cart_name">
            {item.title ? <h5>{item.title}</h5> : null}
            {/* {item.desno ? <h4>{item.desno}</h4> : null} */}
            <h6>{item.company}</h6>
            <h6 className='colorit'>{item.typeof}</h6>
        </div>
        
        <div className="pro_cart_cart_price">
                <h3>₹ {item.id}</h3>
        </div>
        <div className="pro_cart_cart_buttons">
        <div className="pro_cart_cart_buttons_right">
            <button onClick={() => addToCart(item)} ><AddIcon/></button>
        </div>
        </div>

    </div>
  )
}

export default Productcard