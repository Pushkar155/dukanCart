import React from 'react'
import { useCart } from '../../CartContext';

const PrintCard = () => {
    const {paid,selectedOption} = useCart('');
    var rop="not";
    if(selectedOption==="option1"){
        rop="Cash";
    }
    if(selectedOption==="option2"){
        rop="UPI";
    }
    if(selectedOption==="option3"){
        rop="Cheque";
    }

  return (
    <div>
        <h1>hii</h1>
        {console.log(paid,rop)}
    </div>
  )
}

export default PrintCard