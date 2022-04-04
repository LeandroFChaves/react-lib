import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ir para home
        </p>
        <a
          className="App-link"
          href="/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          Home
        </a>
      </header>
    </div>
  );
}

export default App;
