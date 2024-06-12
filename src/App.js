import logo from './vidlogo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://vidyarang.online"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vidyarang : Chat Now
        </a>
      </header>
    </div>
  );
}

export default App;
