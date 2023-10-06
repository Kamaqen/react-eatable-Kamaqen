import styled from "@emotion/styled";
import React from "react";
import { useParams } from "react-router-dom";
import { typography } from "../styles";
import Image from "../components/image";

const Container = styled.div`
  padding: 40px 50px;
  font-size: 1.4rem;
`;

const Main = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5.5rem;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6875rem;
`;

const Title = styled.div`
  ${typography.head.md}
  text-align: center;
`;

const Price = styled.p`
  color: #fa4a0c;
`;

const Body = styled.div`
  ${typography.text.lg}
  text-align: initial;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Description = styled.p`
  ${typography.text.md}
`;

export const ProductDetails = () => {
  const { id } = useParams();
  return (
    <Container>
      <Main>
        <div>
          <Image size={"md"} src={product?.picture_url} />
        </div>

        <TextSection>
          <Title>
            <p>{product?.name}</p>
            <Price data-testid="price">{`$${product?.price}`}</Price>
          </Title>
          <Body>
            <p>Description</p>
            <Description>{product?.description}</Description>
          </Body>
        </TextSection>
        <CustomButton onClick={() => navigate("/")}>Go Back</CustomButton>
      </Main>
    </Container>
  );
};
