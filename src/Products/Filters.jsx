function Categories({ categories, onCategoryChange }) {
  return (
    <div className="filter-section">
      {categories.map((item) => (
        <div key={item} className="filter-option">
          <input
            type="checkbox"
            id={`cat-${item}`}
            onChange={() => onCategoryChange(item)}
          />
          <label htmlFor={`cat-${item}`}>{item}</label>
        </div>
      ))}
    </div>
  );
}

function PriceRange() {
  return null;
}

function Sorter() {
  return null;
}

function Filters({ categories, onCategoryChange }) {
  return (
    <div className="filters">
      <h3>Filters</h3>
      <h4>Category</h4>
      <Categories categories={categories} onCategoryChange={onCategoryChange} />
      <PriceRange />
      <Sorter />
    </div>
  );
}

export default Filters;
