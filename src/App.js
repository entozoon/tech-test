import './App.css';
import React, { Component } from 'react';
import People from './components/People/People';
import io from 'socket.io-client';

class App extends Component {
  constructor(props) {
    super(props);

    // Create socket connection to the local server
    this.socket = io('http://localhost:3000');

    this.state = {
      peopleData: []
    };
  }

  componentDidMount() {
    // Test socket.io connection by sending the server a message
    console.log('emitting message: hello');
    this.socket.emit('message', 'Hello from the client');

    // When receiving peopleData from server, save it as a state
    this.socket.on('peopleData', peopleData => {
      this.setState({ peopleData: peopleData });
    });
  }

  /**
   * People have changed, so emit the new set of data for the server to handle
   */
  peopleChanged() {
    this.socket.emit('peopleData', this.state.peopleData);
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Sky Betting &amp; Gaming Technical Test</h1>
        </header>

        {this.state.peopleData.length > 0 &&
          <People people={this.state.peopleData} peopleChanged={this.peopleChanged.bind(this)} />}
      </div>
    );
  }
}

export default App;
