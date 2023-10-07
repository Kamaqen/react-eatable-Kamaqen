import styled from "@emotion/styled";
import CardDish from "../components/card";
import { typography } from "../styles";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/Button";

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
  gap: 4rem;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${typography.head.sm}
`;
const Footer = styled.footer`
  position: absolute;
  bottom: 92px;
`;

function Dashboard({ products }) {
  const navigate = useNavigate();
  function showProduct(id) {
    navigate(`/products/${id}`);
  }
  function editProduct(id) {
    navigate(`/products/${id}/edit`);
  }

  return (
    <Container>
      <Header>Products Dashboard</Header>
      <ContainerCards>
        {products?.map((elem) => (
          <CardDish
            key={elem.id}
            id={elem.id}
            name={elem.name}
            price={elem.price}
            src={elem.picture_url}
            handleProduct={showProduct}
            handleEditProduct={editProduct}
          />
        ))}
      </ContainerCards>
      <Footer>
        <CustomButton
          onClick={() => {
            navigate("create");
          }}
        >
          Create Product
        </CustomButton>
      </Footer>
    </Container>
  );
}

export default Dashboard;
