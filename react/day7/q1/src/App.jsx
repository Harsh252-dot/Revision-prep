import { useEffect, useRef, useState } from 'react';

const productsData = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  category: ['Electronics', 'Clothing', 'Food', 'Books'][i % 4],
  price: (Math.random() * 100 + 10).toFixed(2)
}));

export default function App() {
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [isSearching, setIsSearching] = useState(false);

  const debounceRef = useRef(null);

  useEffect(() => {
    setIsSearching(true);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      const query = search.toLowerCase();

      const result = productsData.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );

      setFilteredProducts(result);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(debounceRef.current);
  }, [search]);

  return (
    <div className="container">
      <h2>Live Product Search</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p className="status">
        {isSearching ? 'Searching...' : ''}
      </p>

      <ul>
        {filteredProducts.length === 0 ? (
          <li>No products found</li>
        ) : (
          filteredProducts.map((product) => (
            <li key={product.id}>
              {product.name} — {product.category} — ${product.price}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
