import React from 'react';
import ProductList from './components/ProductList';

const Home = () => {
  return (
    <div>
      <h1>Welcome to MIT Marketplace</h1>
      <ProductList category="electronics" />  {/* Example category */}
    </div>
  );
};

export default Home;
