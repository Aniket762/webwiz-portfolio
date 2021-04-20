import React from 'react';
import Hero from '../components/hero/hero';
import About from '../components/about/about';
import Event from '../components/events/events';
import Team from '../components/team/team';
import Footer from '../components/footer/footer';

function home() {
    return (
        <div className="App">
            <Hero />
            <About />
            <Event />
            <Team />
            <Footer/>
        </div>
    )
}

export default home
