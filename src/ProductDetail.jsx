import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext';
import Navbar from './Products/Navbar';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addItem } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        return response.json();
      })
      .then((json) => {
        setProduct(json);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading product...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleAddToCart = () => {
    addItem({ id: product.id, name: product.title, category: product.category, price: product.price, image: product.image });
  };

  return (
    <div className="product-detail">
      <Navbar />
      <div className="product-detail-content">
        <img src={product.image} alt={product.title} className="product-detail-image" />
        <div className="product-detail-info">
          <h1>{product.title}</h1>
          <p>{product.category}</p>
          <p>{product.description}</p>
          <h2>${product.price}</h2>
          <button onClick={handleAddToCart} className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;