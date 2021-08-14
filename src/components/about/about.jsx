import React from 'react'
import styled from "styled-components";

const Heading = styled.h1`
  text-align:center;
  font-size: 60px;
  letter-spacing: 0;
  color: #000000;
  letter-spacing: -0.03rem;
  margin-top: -20px;
  margin-bottom:-5px;
  @media screen and (max-width:600px){
    font-size:40px;
  }
 
`;

const SubHeading = styled.div`
  align-self:flex-end;
  font-size: 40px;
  color: #710193;
  line-height:4;
  font-weight:600;
  margin-top: 50px;

  @media screen and (max-width: 1324px) {  
    font-size:40px;
  }
 
`;

const Content = styled.p`
  font-family: "metropolis-regular", sans-serif;
  font-size: 30px;
  padding: 3rem 9rem 3rem 9rem;
  margin-top:-40px;
  line-height: 1.7;
  margin-bottom: 3.6rem;
  color: rgba(85, 85, 85, 0.95);
  text-align: left;

  @media screen and (max-width: 1324px) {  
    font-size:20px;
    padding: 3rem 5rem 3rem 5rem;
  }

  @media screen and (max-width: 550px) {  
    font-size:20px;
    padding: 2rem 3rem 2rem 3rem;
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
obcaecati ten.etur iure eius earum ut molestias architecto voluptate
Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati ten.etur iure eius earum ut molestias architecto voluptate</Content>
      </div>
    )
}

export default about
