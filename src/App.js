import React,{useEffect, useState} from 'react'
import { Route, Switch,useLocation } from 'react-router';
import './App.css';
import Navbar from './inc/Navbar';
import Footer from './inc/Footer';
import Home from './Home';

const URL = 'http://localhost:8888/webshop/';

function App() {
  const [category,setCategory] = useState(null);
  const [cart, setCart] = useState([]);

  let location = useLocation();
 
  useEffect(()=> {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  },[])


  useEffect(()=> {
    
    if (location.state !== undefined) {
      setCategory({id: location.state.id,name: location.state.name});
    }
  },[location.state])

  function addToCart(product) {
    const newCart = [...cart,product];
    setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));
  }

  return (
    <>
      <Navbar url={URL} setCategory={setCategory} cart={cart}/>
      <div id="content" className="container-fluid">
        <Switch>
          <Route
            path="/"
            render={() =>
              <Home
                url={URL}
                category={category}
                addToCart={addToCart}
              />
            }
            exact
          />
        </Switch>
      </div>
      <Footer />
    </>
  )  
}

export default App;
