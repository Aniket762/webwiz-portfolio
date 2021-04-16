import "./App.css";
import { Navbar } from "./components/appbar/navbar";
import Hero from './components/hero/hero';
import About from './components/about/about';
import Event from './components/events/events';
import Team from './components/team/team';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Event />
      <Team />
    </div>
  );
}

export default App;
