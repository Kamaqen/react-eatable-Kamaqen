import styled from "@emotion/styled";
import React from "react";
import ReactDom from "react-dom";

const ModalDiv = styled.div`
  position: "fixed";
  top: "50%";
  left: "50%";
  transform: "translate(-50%, -50%)";
  background-color: "#FFF";
  padding: "50px";
  z-index: 1000;
`;

const OverlayDiv = styled.div`
  position: "fixed";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: "rgba(0, 0, 0, .7)";
  z-index: 1000;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <OverlayDiv />
      <ModalDiv>
        {children}
        <StyledDiv>
          <button onClick={onClose}>Yes, delete it!</button>
          <button onClick={onClose}>No, cancel!</button>
        </StyledDiv>
      </ModalDiv>
    </>,
    document.getElementById("modaldelete")
  );
}
