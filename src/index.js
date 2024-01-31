import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Cart from './components/Cart.js';
import ProductList from './components/ProductList.js';
import './styles/styles.css'; // Import the CSS file

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (productToRemove) => {
    const newCartItems = cartItems.filter((item) => item !== productToRemove);
    setCartItems(newCartItems);
  };

  return (
    <div>
      <ProductList onAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));