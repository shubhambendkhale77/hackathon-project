import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './ProductList.css';


const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <Link to={`/products/${product.id}`}>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </Link>
        </div>
      ))}
    </div>  
  );
};

export default ProductList;
