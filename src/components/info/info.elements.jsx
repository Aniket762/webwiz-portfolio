import styled from 'styled-components';

export const InfoSec = styled.div`
  color: #fff;
  padding: 50px 0;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};

  @media screen and (max-width: 768px) {
    padding: 15px 0;
  }
`;

export const InfoRow = styled.div`
  display: flex;

  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  ${'' /* padding-bottom: 60px; */}
  padding: auto;

  @media screen and (max-width: 768px) {
    padding-bottom: 25px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 15px;
    padding-left: 15px;
  }
`;


export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};

  @media screen and (max-width: 991px) {
    font-size: 30px;
    margin-bottom: 12px;
  }
`;

export const Subtitle = styled.p`
  max-width: 500px;
  margin: auto;
  font-size: 20px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? /*'#a9b3c1'*/ '#898989' : '#1c2237')};
`;
