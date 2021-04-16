import "./App.css";
import { Navbar } from "./components/appbar/navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Event from "./pages/event";
import Projects from "./pages/projects";
import Team from "./pages/team";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch >
        <Route path="/" exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/team' exact component={ Team} />
        <Route path='/projects' exact component={Projects } />
        <Route path='/events' exact component={Event} />  
     </Switch>
    </Router>
  );
}

export default App;
