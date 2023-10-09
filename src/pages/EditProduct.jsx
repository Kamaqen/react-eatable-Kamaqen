import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import CustomButton from "../components/Button";
import { getProductById, updateProduct } from "../services/product-services";

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
`;

const Container = styled.div`
  padding: 40px 0px;
  font-size: 1.4rem;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 92px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 414px;
  height: 372px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 96px;
`;

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
    category: "",
    picture_url: "",
  });

  useEffect(() => {
    getProductById(id)
      .then((response) => {
        setProduct(response);
      })
      .catch((err) => console.error(err));
  }, [id]);

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateProduct(id, product);
      console.log("Product updated succesfullly:", product);
      navigate(`/products/${id}`);
    } catch (error) {
      console.error("Error in updating product:", error);
    }
  };

  return (
    <Container>
      <Header>Edit Product</Header>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          name="name"
          type="text"
          value={product.name}
          label="Name"
          onChange={handleChange}
        />
        <Input
          name="price"
          type="number"
          value={product.price}
          label="Price"
          onChange={handleChange}
        />
        <Input
          name="description"
          value={product.description}
          label="Description"
          onChange={handleChange}
        />
        <Input
          name="category"
          value={product.category}
          label="Category"
          onChange={handleChange}
        />
        <Input
          name="picture_url"
          value={product.picture_url}
          label="Picture URL"
          onChange={handleChange}
        />
        <Footer>
          <CustomButton type="submit">Save</CustomButton>
        </Footer>
      </StyledForm>
    </Container>
  );
}

export default EditProduct;
