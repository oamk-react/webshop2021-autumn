import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Home.css';

export default function Home({url,category,addToCart}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category !== null) {
      axios.get(url + 'products/getproducts.php/' + category?.id)
        .then((response) => {
          const json = response.data;
          setProducts(json);
          //console.log(json);
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
            <Link
              to={{
                pathname: '/product',
                state: {
                  id: product.id,
                  name: product.name,
                  price: product.price  
                }
              }}
            >
              <p>{product.name} {product.price}</p>
              <img src={url + 'images/' + product.image} alt={product.name}/> 
              
            </Link>
            {/* <button class="btn btn-primary" type="button" onClick={e => addToCart(product)}>Add</button> */}
          </div>
        ))}
    </div>
  )
}
