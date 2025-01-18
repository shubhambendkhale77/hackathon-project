import { useNavigate } from 'react-router-dom';
import"./productDetails.css"

// Inside ProductDetail.jsx
const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize navigate
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductById(id);
        if (!productData) {
          navigate('/'); // Redirect to home if product not found
        }
        setProduct(productData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, navigate]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return product ? (
    <div className="product-detail">
      <img src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Stock: {product.stock} units available</p>
      <p>Rating: {product.rating} stars</p>

      <h3>Reviews</h3>
      <ul>
        {product.reviews.map((review, index) => (
          <li key={index}>
            <strong>{review.userId}</strong>: {review.comment} (Rating: {review.rating} stars)
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <p>Product not found</p>
  );
};
