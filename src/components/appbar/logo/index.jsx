import React from "react";
import styled from "styled-components";
import logo from "../../../assets/images/logo.ico";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  width: 70px;
  height: 60px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoImg>
        <img src={logo} alt="Webwiz logo" />
      </LogoImg>
    </LogoWrapper>
  );
}
