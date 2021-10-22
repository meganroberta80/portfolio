import Nav from './components/Nav'
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <br />
      
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  )
}

export default App;
