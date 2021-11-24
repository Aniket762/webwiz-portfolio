import styled from "styled-components";


export const FooterContainer = styled.footer`
  ${'' /* background-color: #2B0032; */}
  background-color: #2B0032;
`;

// export const FooterContainer = styled.footer.create(
//   {
//     backgroundColor: 
//       Colors.darkViolet
//   }
// )

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 10px auto 10px auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const WebsiteRights = styled.p`
  ${'' /* color: #fff; */}
  color: #FFF;

  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  ${'' /* color: #fff; */}
  color: #FFF;
  font-size: 24px;
`;
