import React, { Component } from 'react';
import './App.css';
import Render from './components/render';
import Navigation from './components/navigation';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Navigation/>
        <main className="container">
          <Render/>
        </main>
      </div>
    );
  }
}

export default App;
