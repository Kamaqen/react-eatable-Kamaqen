import styled from "@emotion/styled";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

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
