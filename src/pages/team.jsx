import React from 'react';
import Card from '../components/card/card';
import teamData from './teamData';


function createCard(teamData) {
    return (
      <Card
        key={teamData.id}
        image={teamData.image}
        name={teamData.name}
        tagline={teamData.tagline}
        github={teamData.github}
        linkedin={teamData.linkedin}
        instagram = {teamData.instagram}    
      />
    );
  }

function team() {
    return (
        <div className='App'>
            <h1>TEAM</h1>
            <div style={{display:'flex',flexDirection:'row'}}>
            {teamData.map(createCard)}
            </div>
                
            
        </div>
    );
}

export default team
