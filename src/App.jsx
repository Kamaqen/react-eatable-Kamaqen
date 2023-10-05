import { useEffect, useState } from "react";
import { getProducts } from "./services/product-services";
import styled from "@emotion/styled";
import CardDish from "./components/card";
import Dashboard from "./components/Dashboard";

const Div = styled("div")`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function App() {
  return (
    <Div>
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="/products" />} />
          <Route path="products" element={<Dashboard />} />
        </Route>
      </Routes>
    </Div>
  );
}
export default App;
