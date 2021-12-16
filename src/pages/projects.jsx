import React from 'react';
import Card from '../card/card';
import projectData from './projectsData';
import { Grid } from '@material-ui/core';
import styled from "styled-components";


const SubHeading = styled.div`
  align-self:flex-end;
  font-size: 30px;
  color: #710193;

  font-weight:600;

  @media screen and (max-width: 1324px) {  
    font-size:40px;
  }
 
`;

const Content = styled.p`
  font-family: "metropolis-regular", sans-serif;
  font-size: 25px;
  color: rgba(85, 85, 85, 0.95);

  @media screen and (max-width: 1324px) {  
    font-size:20px;
  }
 
`;

function createCard(projectData) {
  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card
        key={projectData.id}
        image={projectData.image}
        name={projectData.name}
        tagline={projectData.tagline}
        github={projectData.github}
      />
    </Grid>
  );
}

function team() {
  return (
    <div className='App'>
      <SubHeading> #Projects</SubHeading>
      <Content> Every student has strategic goals and the projects that we do for them advance those goals</Content>
      <Grid lg={12} item container spacing={10} align='center'>
        {projectData.map(createCard)}
      </Grid>

    </div>
  );
}

export default team