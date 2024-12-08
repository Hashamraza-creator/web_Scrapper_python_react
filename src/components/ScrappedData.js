import React, { useEffect, useState } from 'react';
import './ScrappedData.css';

const ScrappedData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('cameras');
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = (query) => {
    setIsLoading(true);
    const API_BASE_URL = 'https://web-scrapper-python-react-c4po.vercel.app'; // Make sure the URL is correct
    fetch(`${API_BASE_URL}/api/scraped-data/${query}`) // Adjusted the URL here
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
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
