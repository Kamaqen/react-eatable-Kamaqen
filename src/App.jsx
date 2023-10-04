import { useEffect, useState } from "react";
import { getProducts } from "./services/products-service";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getProducts().then(
      (result) => {
        setIsLoaded(true);
        setProducts(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} {product.price} {product.picture_url}
          </li>
        ))}
      </ul>
    );
  }
}
export default App;
