import React from 'react';
import Card from '../components/card/card';
import teamData from './teamData';
// import teamDataPostHolders from './teamData';
import { Grid } from '@material-ui/core';





function createCard(teamData)
{
  return (
    <Grid item lg={this} md={4} sm={6} xs={12}>
      <Card
        key={teamData.id}
        image={teamData.image}
        name={teamData.name}
        tagline={teamData.tagline}
        github={teamData.github}
        linkedin={teamData.linkedin}
        instagram={teamData.instagram}
      />
    </Grid>

  );
}

function team()
{
  return (
    <div className='App'>
      <h1>TEAM</h1>
      <h2>Executive Body 2021-22</h2>
      <Grid lg={12} item container spacing={3} align='center'>
        {teamData.executive.map(createCard, 4)}
      </Grid>
      <h2>Founding Members</h2>
      <Grid lg={12} item container spacing={3} align='center'>
        {teamData.founding.map(createCard, 4)}
      </Grid>
      <h2>Team Webwiz</h2>
      <Grid lg={12} item container spacing={3} align='center'>
        {teamData.team.map(createCard, 3)}
      </Grid>
    </div>
  );
}

export default team
