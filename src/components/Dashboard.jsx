import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { getProducts } from "../services/product-services";
import CardDish from "./card";

const ContainerCards = styled.div`
  max-width: 414px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 3rem;
  grid-template-rows: repeat(5, 1fr);
  grid-row-gap: 4rem;
  align-items: center;
`;
const Container = styled.div`
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

function Dashboard() {
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
      <Container>
        <ContainerCards>
          {products?.map((elem) => (
            <CardDish
              key={elem.id}
              id={elem.id}
              name={elem.name}
              price={elem.price}
              src={elem.picture_url}
              // handleProduct={showProduct}
            />
          ))}
        </ContainerCards>
      </Container>
    );
  }
}
export default Dashboard;
