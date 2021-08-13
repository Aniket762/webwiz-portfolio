import "./App.css";
import { Navbar } from "./components/appbar/navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Event from "./pages/event";
import Team from "./pages/team";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch >
        <Route path="/" exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/team' exact component={ Team} />
        <Route path='/events' exact component={Event} />  
     </Switch>
     <Footer/>
    </Router>
  );
}

export default App;
