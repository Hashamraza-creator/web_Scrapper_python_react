import React, { useEffect, useState } from 'react';

const ScrappedData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the Flask backend API
    fetch('http://127.0.0.1:5000/api/scraped-data/cameras')  // Replace 'cameras' with other filenames as needed
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Scraped Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre> {/* Display the data */}
    </div>
  );
};

export default ScrappedData;
