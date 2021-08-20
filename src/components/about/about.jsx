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
  font-size: 29px;
  padding: 3rem 9rem 3rem 9rem;
  margin-top:-40px;
  line-height: 1.5;
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
        <Content>Webwiz is committed to providing resources and content to the web development community. Our entire focus is on web development and design. #1 club in web development running under Student activity center (SAC) NIT Rourkela. Students from all undergraduate programs with interest in growing as a web developer are warmly welcome. We believe that web development is a -domain that can make a newbie crazy about software development. It doesn’t matter if you are a frontend, full-stack, or backend developer or never even touched a code editor in your life. Webwiz club hopes to provide you with knowledge, roadmaps, and guidance. Of course, our content will focus on and use examples from web-based languages such as Javascript and Python. We are big fans of the React and Node.js framework. Still, we believe you shouldn’t limit yourself in this continually evolving sector of technology. We hope you find something useful!
        </Content>
      </div>
    )
}

export default about
