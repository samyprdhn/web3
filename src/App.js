import logo from './logo.svg';
import moon from './moon.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <footer className="App-footer">
        <img src={moon} className="App-logo" alt="moon" />
      </footer>
    </div>
  );
}

export default App;
