import { useState, useEffect } from "react";
import Filters from "./Filters";
import ProductContainer from "./ProductContainer";
import Navbar from "./Navbar";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then((json) => {
        setProducts(json);

        // Extract unique categories from products
        const uniqueCategories = [...new Set(json.map((p) => p.category))];
        setCategories(uniqueCategories);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  function handleCategoryChange(category) {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  }

  return (
    <div className="products-page">
      <Navbar />
      <div style={{ display: 'flex', flex: 1 }}>
        <div className="filters-container">
          <Filters categories={categories} onCategoryChange={handleCategoryChange} />
        </div>
        <div className="products-main">
          <ProductContainer
            products={products}
            selectedCategories={selectedCategories}
            loading={loading}
            error={error}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
