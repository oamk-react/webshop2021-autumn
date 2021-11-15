import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function Home({url,category,addToCart}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category !== null) {
      axios.get(url + 'products/getproducts.php/' + category?.id)
        .then((response) => {
          const json = response.data;
          setProducts(json);
        }).catch (error => {
          if (error.response === undefined) {
            alert(error);
          } else {
            alert(error.response.data.error);
          }
        })
    } 
  },[category])

  return (
    <div style={{'padding-top': '100px'}}>
      <h3>Products for {category?.name}</h3>
        {products.map(product => (
          <div key={product.id}>
            <p>
              {product.name}
            </p>
            <button class="btn btn-primary" type="button" onClick={e => addToCart(product)}>Add</button>
          </div>
        ))}
    </div>
  )
}
