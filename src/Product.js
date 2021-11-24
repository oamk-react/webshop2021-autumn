import React,{useEffect} from 'react'

export default function Product({product,addToCart}) {

/*   useEffect(() => {
    console.log(product);
  },[]) */ 

  return (
    <div style={{'padding-top': '100px'}}>
      {product?.name}
      {product?.price}
      <button class="btn btn-primary" type="button" onClick={e => addToCart(product)}>Add</button>
    </div>
  )
}
