// src/components/Cart.js
import React from 'react';
import '../styles/styles.css';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="product-info">
              <span className="product-name">{item.name}</span> - <span className="product-price">${item.price}</span>
            </div>
            <button onClick={() => onRemoveFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="cart-total">
      <span className="product-name cart-h">Total</span><span className='product-price'>${cartItems.reduce((total, item) => total + item.price, 0)}</span>
      </div>
    </div>
  );
};

export default Cart;