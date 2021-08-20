import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import One from './closuers/One';
import Two from './closuers/Two';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div className="App">
            <header className="App-header">
              <h3>React Closures</h3>
              <img src={logo} className="App-logo" alt="logo" />
              <Link to="/one">Code 1</Link>
              <Link to="/two">Code 2</Link>
            </header>
          </div>
        </Route>
        <Route path="/one" component={One} />
        <Route path="/two" component={Two} />
      </Switch>
    </Router>

  );
}

export default App;
