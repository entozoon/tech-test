import './App.css';
import React, { Component } from 'react';
import io from 'socket.io-client';

class App extends Component {
  constructor(props) {
    super(props);
    this.socket = io('http://localhost:3000');
    this.state = {
      peopleData: []
    };
  }

  componentDidMount() {
    // Test socket.io by sending the server a message
    console.log('emitting message: hello');
    this.socket.emit('message', 'Hello from the client');

    // When receiving peopleData from server, save it as a state
    this.socket.on('peopleData', peopleData => {
      this.setState({ peopleData: peopleData });
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Sky Betting &amp; Gaming Technical Test</h1>
        </header>

        <div>
          {this.state.peopleData.length > 0 &&
            <p>
              Received item count: {this.state.peopleData.length}
            </p>}
        </div>
      </div>
    );
  }
}

export default App;
