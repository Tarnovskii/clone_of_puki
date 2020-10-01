import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Website is under construction</p>
            <a
                className="App-link"
                target="_blank"
                rel="noopener noreferrer"
            >
            </a>
          </header>
        </div>
    );
  }
}

export default App;
