import React from 'react';
import styled from 'styled-components';
import './about.css';

const Heading = styled.h1`
  text-align: center;
  font-size: 60px;
  letter-spacing: 0;
  color: #000000;
  letter-spacing: -0.03rem;
  padding: 0px 5vw;
  margin-bottom: -5px;
  @media screen and (max-width: 600px) {
    font-size: 40px;
  }
`;

const LiteCard = props => {
  return (
    <div
      className="liteCard"
      style={{
        backgroundImage: `url("${props.imageUrl}")`,
        backgroundColor: '#F6F6F6',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: props.color,
      }}
    >
      {/*Icon*/}
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

function about() {
  return (
    <div id="about">
      <h1>#About Us</h1>
      <div className="underline"></div>
      <Heading>Not just any other technical club</Heading>
      <div id="cards">
        <LiteCard
          title="Made for students"
          description="If you are crazy about development we are crazy about you. Any other barrier that you think exists, DOESN'T."

          color="#000"
        />
        <LiteCard
          title="Development"
          description="We focus on Design as much as developing. At last the eye sees it first."

          color="#000"
        />
        <LiteCard
          title="Practical Guide"
          description="We guide you everytime you need us. Literally anywhere you want to go we have a guide for that."

          color="#000"
        />
      </div>
    </div>
  );
}

export default about;
