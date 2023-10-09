import styled from "@emotion/styled";
import CardDish from "../components/card";
import { typography } from "../styles";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/Button";
import { useEffect, useState } from "react";
import { getProducts } from "../services/product-services";
// import Modal from "../components/ModalDelete";

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

// const BUTTON_WRAPPER_STYLES = {
//   position: "relative",
//   zIndex: 1,
// };

// const OTHER_CONTENT_STYLES = {
//   position: "relative",
//   zIndex: 2,
//   padding: "10px",
// };

function Dashboard() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  // const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    getProducts().then(setProducts).catch(console.log);
  }, [products]);
  function showProduct(id) {
    navigate(`/products/${id}`);
  }
  function editProduct(id) {
    navigate(`/products/${id}/edit`);
  }
  const refreshDashboard = () => {
    getProducts().then(setProducts).catch(console.log);
  };

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
            refreshDashboard={refreshDashboard}
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
