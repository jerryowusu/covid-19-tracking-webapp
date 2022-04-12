import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Global from './components/Global';
import Country from './components/Country';

function App() {
  return (
    <Router>
      <nav>
        <a href="/home" className="navbar">
          JayKoder
        </a>
        <div className="navbar">
          <li className="nav-item">
            <Link to="/home" className="nav-link">
              Global
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/country" className="nav-link">
              Country
            </Link>
          </li>
        </div>
      </nav>
      <div className="container">
        <Switch>
          <Route exact path={['/', '/home']} component={Global} />
          <Route path="/country" component={Country} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
