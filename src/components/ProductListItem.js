// src/components/ProductListItem.js

import React from 'react';

const ProductListItem = ({ product, onAddToCart }) => {
  return (
    <div className="product-list-item">
     <p className="product-info">
  <span className="product-name">{product.name}</span>   <span className="product-price">${product.price}</span>
</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductListItem;