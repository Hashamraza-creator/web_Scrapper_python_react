import React, { useState } from "react";
import ScrapedData from "./components/ScrappedData";

function App() {
  const [category, setCategory] = useState("cameras"); // Default category is cameras

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="App">
      <h1>Scraped Data Viewer</h1>
      <label>
        Select Category:
        <select value={category} onChange={handleCategoryChange}>
          <option value="cameras">Cameras</option>
          <option value="headphones">Headphones</option>
          <option value="gaming_console">Gaming Consoles</option>
          <option value="keyboards">Keyboards</option>
          <option value="laptops">Laptops</option>
          <option value="monitors">Monitors</option>
          <option value="printers">Printers</option>
          <option value="smartphones">Smartphones</option>
          <option value="smartwatches">Smartwatches</option>
          <option value="tablets">Tablets</option>
        </select>
      </label>
      <ScrapedData category={category} />
    </div>
  );
}

export default App;
