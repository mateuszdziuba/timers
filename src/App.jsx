import React, { Component } from 'react';
import './App.css';
import TimersDashboard from './components/TimersDashboard';

class App extends Component {
  render() {
    return (
      <div id="main" className="main ui">
        <h1 className="ui dividing centered header">Timers</h1>
          <TimersDashboard />
        <div id="content" />
      </div>
    );
  }
}

export default App;
