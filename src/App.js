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
        <div className="App-header">
          <h2>dwadwa to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
