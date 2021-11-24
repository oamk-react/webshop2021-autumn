import React,{useEffect} from 'react';
import './Order.css';

export default function Order({cart,updateAmount}) {

  /* useEffect(() => {
    //console.log(cart);
  },[]) */

  function changeAmount(e,product) {
    updateAmount(e.target.value,product);
  }  

  return (
    <div style={{'padding-top': '100px'}}>
      <h3>Shopping cart</h3>
      <table>
      { cart.map((product) => {
        return (
          <tr>
            <td>{product.name}</td>
            <td>{product.price} €</td>
            <td>
              <input 
                style={{width: '60px'}}
                type="number" 
                step="1" 
                onChange={e => changeAmount(e,product)}
                value={product.amount} 
              />
            </td>
          </tr>
        );
      })}
      </table>
    </div>
  )
}
