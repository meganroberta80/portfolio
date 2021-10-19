import './App.css';
import { Switch, Route } from 'react-router-dom'
import Contact from './components/Contact'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
    return (
        <div className="App">
            <Header />

            <body>
                <Switch>

                    <Route path='/about' exact component={About}>
                        <About />
                    </Route>
                    
                    <Route path='/projects' exact component={Projects}>
                        <Projects />
                    </Route>

                    <Route path='/resume' exact component={Resume}>
                        <Resume />
                    </Route>

                    <Route path='/contact' exact component={Contact}>
                        <Contact />
                    </Route>

                </Switch>
            </body>

        </div>
    );
}

export default App;