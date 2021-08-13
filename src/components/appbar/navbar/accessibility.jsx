import React from "react";
import styled from "styled-components";

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 45px;
`;


const LoginButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #222;
  font-size: 20px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid #2B0032;
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #F6F6F6;
    background-color: #2B0032;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

export function Accessibility(props) {
  return (
    <AccessibilityContainer>
      <LoginButton>Join Us</LoginButton>
    </AccessibilityContainer>
  );
}
