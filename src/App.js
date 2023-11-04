import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './index.css';
import Home from './Home'; 
import About from './About'; 
import Service from './Service'; 
import Contact from './Contact';
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartPage from './CartPage'; // Import your CartPage component
import { CartProvider } from './CartContext'; 
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return ( 
  <>
  <CartProvider>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/service' component={Service} />      
      <Route exact path='/contact' component={Contact} />  
      <Route exact path="/cart" component={CartPage} />  

          <Redirect to="/" />
    </Switch>
    <Footer/>
    </CartProvider>
  </>
  );
}

export default App;
