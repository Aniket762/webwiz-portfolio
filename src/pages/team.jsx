import React from 'react';
import Card from '../components/card/card';
import teamData from './teamData';
// import teamDataPostHolders from './teamData'
import { Grid } from '@material-ui/core';


// function createCard(teamDataPostHolders)
// {
//   return (
//     <Grid item lg={3} md={4} sm={6} xs={12}>
//       <Card
//         key={teamDataPostHolders.id}
//         image={teamDataPostHolders.image}
//         name={teamDataPostHolders.name}
//         tagline={teamDataPostHolders.tagline}
//         github={teamDataPostHolders.github}
//         linkedin={teamDataPostHolders.linkedin}
//         instagram={teamDataPostHolders.instagram}
//       />
//     </Grid>
//   );
// }

// function team()
// {
//   return (
//     <div className='App'>
//       <h1>TEAM</h1>
//       <Grid lg={12} item container spacing={3} align='center'>
//         {teamDataPostHolders.map(createCard)}
//       </Grid>
//     </div>
//   );
// }



function createCard(teamData)
{
  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
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
      <Grid lg={12} item container spacing={3} align='center'>
        {teamData.map(createCard)}
      </Grid>
    </div>
  );
}

export default team
