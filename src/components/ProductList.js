import React from 'react';
import ProductListItem from './ProductListItem.js';
import '../styles/styles.css';


import productsData from '../data/products.json';

const ProductList = ({ onAddToCart }) => {
  return (
    <div className="product-list">
      <h2>Product List</h2>
      {productsData.map((product) => (
        <ProductListItem key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;