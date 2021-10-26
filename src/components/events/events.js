import React from 'react';
import styled from "styled-components";

const Heading = styled.div`
  align-self:flex-end;
  font-size: 40px;
  color: white;
  line-height:4;
  font-weight:600;

  @media screen and (max-width: 1324px) {  
    font-size:40px;
  }
`;

const SubHeading = styled.div`
  align-self:flex-end;
  font-size: 40px;
  margin-top: -50px;
  color: white;
  font-weight: 600;
  padding: 50px;
  @media screen and (max-width: 762px) {  
    font-size:25px;
  }
 @media screen and (min-width:762px && max-width: 1324px) {  
    font-size:25px;
  }
 
`;

const Button = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #490055;
  border: 2px solid #490055;
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #fff;
    
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const BackGround = styled.div`
  BackGround-image:url('https://github.com/Aniket762/Webwiz-revamp/blob/main/src/assets/images/pic1.jpeg?raw=true');
  background-repeat: no-repeat;
  background-size:cover;
  height: 600px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

function events() {
  return (
    <div>
      <BackGround>

        <Heading>#Events</Heading>
        <SubHeading>We do great events Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis </SubHeading>
        <Link href="/events"><Button>Let’s check out more events</Button></Link>
      </BackGround>

    </div >
  )
}

export default events
