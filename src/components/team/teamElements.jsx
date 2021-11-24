import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding: 30px 0;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
`;

export const InfoRow = styled.div`
  display: flex;

  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
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
  padding-left: 0px;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#710193" : "#4B59F7")};
  font-size: 30px;
  text-align: left;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
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
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#000000" : "#1c2237")};
`;

export const Subtitle = styled.p`
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) =>
    lightTextDesc ? "rgba(85,85,85,0.95)" : "#1c2237"};
`;

export const Button = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #000;
  font-size: 20px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid #490055;
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #490055;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;
