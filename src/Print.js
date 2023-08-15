import React from 'react'
import { useCart } from './CartContext';

const Print = () => {
    const { cart,total} = useCart();
  return (
    <div>
        <h2>Shree ganesh</h2>
        <h3>{cart.length}</h3>
      {cart && cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
                {item.all}
            </li>
          ))}
          {total}
        </ul>
      ) : (<><h2>Nothing to Show Hear</h2></>
      )}
    </div>
  )
}

export default Print