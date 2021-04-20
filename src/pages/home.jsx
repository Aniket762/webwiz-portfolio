import React from 'react';
import Hero from '../components/hero/hero';
import About from '../components/about/about';
import Event from '../components/events/events';
import Team from '../components/team/team';
import Projects from '../components/projects/projects';

function home() {
    return (
        <div className="App">
            <Hero />
            <About />
            <Event />
            <Team />
             <img style={{width:'100%',marginBottom:-10}} src='https://echoofindia.com/SysFiles/images/banner_india.jpeg' alt="" />
            <Projects />
           
        </div>
    )
}

export default home
