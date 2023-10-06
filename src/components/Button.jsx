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
`;

function CustomButton({ children, handleCLick }) {
  return <Button onClick={handleCLick}>{children}</Button>;
}

export default CustomButton;
