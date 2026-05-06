import { useState, useEffect } from "react";
import Item from "./Item";

function ProductContainer({ selectedCategories, loading, error }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        return response.json();
      })
      .then((json) => setProducts(json))
      .catch((err) => console.error("Error:", err));
  }, []);

  const filteredProducts =
    selectedCategories.length > 0
      ? products.filter((p) => selectedCategories.includes(p.category))
      : products;

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="products-header">
        <h2>All Products</h2>
        <p>Showing {filteredProducts.length} of {products.length} results</p>
      </div>
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Item
              key={product.id}
              id={product.id}
              name={product.title}
              category={product.category}
              price={product.price}
              image={product.image}
            />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}

export default ProductContainer;
