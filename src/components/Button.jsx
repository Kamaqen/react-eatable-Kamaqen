import styled from "@emotion/styled";
import { typography } from "../styles/typography";

const Button = styled.button`
  all: unset;
  width: 310px;
  height: 50px;
  padding: 12px 16px;
  border-radius: 30px;
  color: #fff;
  ${typography.text.lg}
  background-color: #FA4A0C;
  cursor: pointer;
`;

function CustomButton({ onClick, children }) {
  return <Button onClick={onClick}>{children}</Button>;
}

export default CustomButton;
