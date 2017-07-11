import './App.css';
import React, { Component } from 'react';
import io from 'socket.io-client';
let socket = io('http://localhost:3000');

class App extends Component {
  constructor(props) {
    super(props);

    // Test socket.io
    console.log('emitting message: hello');
    socket.emit('message', 'hello');
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>Sky Betting &amp; Gaming Technical Test</h1>
        </header>

        <p>Lorem</p>
      </div>
    );
  }
}

export default App;
