import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [showImage, setShowImage] = useState(false);
  const toggle = () => {
    setShowImage(!showImage);
  }
}

export default App;

return (
  <div className="App">
    <header className="App-header">
      <button type="button" onClick={toggle}>
        {this.state.showImage ? 'Esconder' : 'Mostrar'}
      </button>
      {this.state.showImage && (
        <img src={logo} className="App-logo" alt="logo" />
      )}
        <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);