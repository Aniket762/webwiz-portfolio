import "./App.css";
import { Navbar } from "./components/appbar/navbar";
import Hero from './components/hero/hero';
import About from './components/about/about';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
