import React, { useEffect, useState } from 'react';
import './ScrappedData.css';

const ScrappedData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('cameras');
  const [isLoading, setIsLoading] = useState(false);

  // Base API URL, switch between environments
  const API_BASE_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:5000/api/scraped-data";

  const fetchData = (query) => {
    setIsLoading(true);
    fetch(`${API_BASE_URL}/${query}`)
      .then((response) => {
        if (!response.ok) {
          return response.json().then((err) => {
            throw new Error(err.error || 'Unknown error occurred');
          });
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData(query);
  }, [query]);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="container">
      <select
        value={query}
        onChange={handleQueryChange}
        className="select-category"
      >
        <option value="cameras">Cameras</option>
        <option value="gaming_console">Gaming Consoles</option>
        <option value="headphones">Headphones</option>
        <option value="keyboards">Keyboards</option>
        <option value="laptops">Laptops</option>
        <option value="monitors">Monitors</option>
        <option value="printers">Printers</option>
        <option value="smartphones">Smartphones</option>
        <option value="smartwatches">Smartwatches</option>
        <option value="tablets">Tablets</option>
      </select>

      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <div className="error-message">Error: {error}</div>
      ) : data.length > 0 ? (
        <div className="product-grid">
          {data.map((item, index) => (
            <div key={index} className="product-card">
              <img
                src={item.image_url || 'https://via.placeholder.com/300'}
                alt={item.title || 'Product'}
              />
              <h3>{item.title || 'No Title Available'}</h3>
              <p className="price">
                <strong>Price:</strong> {item.price || 'N/A'}
              </p>
              <p className="reviews">
                <strong>Reviews:</strong> {item.reviews || 'N/A'}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div>No data available for this category.</div>
      )}
    </div>
  );
};

export default ScrappedData;
