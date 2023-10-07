import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import CustomButton from "../components/Button";

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
`;

const Container = styled.div`
  padding: 40px 13px;
  font-size: 1.4rem;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 92px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 213px;
  height: 372px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin-top: 96px;
`;

function CreateProduct() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
    category: "",
    picture_url: "",
  });

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
      await createProduct(product);
      console.log("Product created successfully", product);
      navigate("/");
    } catch (error) {
      console.error("Error in creating product:", error);
    }
  };

  return (
    <Container>
      <Header>Create Product</Header>
      <StyledForm onSubmit={handleSubmit}>
        <Input name="name" type="text" label="Name" onChange={handleChange} />
        <Input
          name="price"
          type="number"
          label="Price"
          onChange={handleChange}
        />
        <Input name="description" label="Description" onChange={handleChange} />
        <Input name="category" label="Category" onChange={handleChange} />
        <Input name="picture_url" label="Picture URL" onChange={handleChange} />
        <Footer>
          <CustomButton type="submit">Create</CustomButton>
        </Footer>
      </StyledForm>
    </Container>
  );
}

export default CreateProduct;
