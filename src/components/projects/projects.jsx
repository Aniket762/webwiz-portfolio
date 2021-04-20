import React from 'react';
import Card from '../card/card';
import projectData from './projectsData';
import {Grid} from '@material-ui/core';


function createCard(projectData) {
    return (
      <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card
        key={projectData.id}
        image={projectData.image}
        name={projectData.name}
        tagline={projectData.tagline}
        github={projectData.github}
        linkedin={projectData.linkedin}
        instagram = {projectData.instagram}    
      />
      </Grid>
    );
  }

function team() {
    return (
        <div className='App'>
            <h1> #Projects</h1>
            <p> Every student has strategic goals and the projects that we do for them advance those goals</p>
            <div style={{marginLeft:300}}>
            <Grid lg={12} item container spacing={10}  align='center'>
            {projectData.map(createCard)}
            </Grid>
           </div>
            
        </div>
    );
}

export default team
