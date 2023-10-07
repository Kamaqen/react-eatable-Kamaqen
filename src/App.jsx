import styled from "@emotion/styled";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { ProductDetails } from "./pages/ProductDetails";
import { getProducts } from "./services/product-services";
import { useEffect, useState } from "react";
import EditProduct from "./pages/EditProduct";

const Div = styled("div")`
  min-height: 896px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then(setProducts).catch(console.log);
  }, []);
  function searchProduct(id) {
    return products.find((elem) => elem.id === id);
  }
  return (
    <Div>
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="/products" />} />
          <Route path="products" element={<Dashboard products={products} />} />
          <Route
            path="products/:id"
            element={<ProductDetails handleSearchProduct={searchProduct} />}
          />
          <Route path="products/:id/edit" element={<EditProduct />} />
        </Route>
      </Routes>
    </Div>
  );
}
export default App;
