import React from "react";
import styled from "styled-components";


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
        <img src="https://webwiznitr.xyz/assets/img/logo.png" alt="Webwiz logo" />
      </LogoImg>
    </LogoWrapper>
  );
}
