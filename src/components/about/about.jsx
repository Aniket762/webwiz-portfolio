import React from 'react'
import styled from "styled-components";

const Heading = styled.div`
  align-self:flex-end;

  font-size: 80px;
  line-height:0;
  letter-spacing: 0;
  color: #000000;
  letter-spacing: -0.03rem;
  margin-top: 0;
  margin-bottom: 4.8rem;

  @media screen and (max-width: 762px) {  
    font-size:25px;
  }
 @media screen and (min-width:762px && max-width: 1324px) {  
    font-size:25px;
  }
 
`;

const SubHeading = styled.div`
  align-self:flex-end;
  font-size: 40px;
  color: #710193;
  line-height:4;
  font-weight:600;

  @media screen and (max-width: 1324px) {  
    font-size:40px;
  }
 
`;

const Content = styled.div`
  font-family: "metropolis-regular", sans-serif;
  font-size: 40px;
  padding:50px;
  margin-top:-40px;
  line-height: 1.7;
  margin-bottom: 3.6rem;
  color: rgba(85, 85, 85, 0.95);

  @media screen and (max-width: 1324px) {  
    font-size:20px;
  }
 
`;

function about() {
    return (
        <div>
        <SubHeading>#About Us</SubHeading>
        <Heading>Not just any other technical club</Heading>
        <Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati ten.etur iure eius earum ut molestias architecto voluptate</Content>
      </div>
    )
}

export default about
