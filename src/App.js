import './App.css';
import { HashRouter as Router } from 'react-router-dom';
import Navigator from './components/Navigator';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigator />
      </Router>
    </div>
  );
}

export default App;
