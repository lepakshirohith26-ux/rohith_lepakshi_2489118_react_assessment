import { useState, useEffect } from "react";

function Test() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
