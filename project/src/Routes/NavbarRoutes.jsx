import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './ProductList';  // Assuming ProductList is in the same folder
import ProductDetail from './ProductDetail'; // Import ProductDetail

const NavbarRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Other Routes */}
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />  {/* Add this route */}
      </Routes>
    </Router>
  );
};

export default NavbarRoutes;
