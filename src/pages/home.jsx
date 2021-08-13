import React from "react";
import Hero from "../components/hero/hero";
import About from "../components/about/about";
import Event from "../components/events/events";
import Team from "../components/team/team";

function home()
{
  return (
    <div className="App">
      <Hero />
      <About />
      <Event />
      <Team />
    </div>
  );
}

export default home;
