import './App.css';
import { HashRouter as Router } from 'react-router-dom';
import Navigator from './components/Navigator';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigator />
        <Home />
      </Router>
    </div>
  );
}

export default App;
