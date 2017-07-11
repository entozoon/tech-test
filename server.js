// Dependencies
const express = require('express'),
  app = express(),
  path = require('path'),
  fs = require('fs');

// Variables
const port = 3000,
  persistentDataPath = './persistent/people.json';

/**
 *  Creating a simple http server using express
 */

// Load the /build/index.html as the basis for the SPA
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'));
});

// Allow access to other files within /build/static such as compiled CSS and JS
app.use('/static', express.static(path.join(__dirname + '/build/static')));

// Start the server listening on given port
const server = app.listen(port, error => {
  if (error) {
    console.log(error);
  } else {
    let url = 'http://localhost:' + port;
    console.log('Listening at ' + url);
  }
});

/**
 * Create a socket.io instance using the created server
 */
const io = require('socket.io')(server);

// User connected
io.on('connection', socket => {
  console.log('Client connected from ' + socket.handshake.address);

  // Grab the stored data from its .json file
  // Using fs.readFile rather than require() because it doesn't update as reliably
  fs.readFile(persistentDataPath, 'utf8', (error, data) => {
    let peopleData = JSON.parse(data);

    // Immediately send them the data when ready
    io.emit('peopleData', peopleData);
  });

  // Output any messages received from client
  socket.on('message', message => {
    console.log('Message received: ' + message);
  });

  // Receive updated people data from the client and store it
  socket.on('peopleData', peopleData => {
    console.log('\nReceived updated people data:');
    console.log(peopleData);

    // Convert data to json and save
    fs.writeFile(persistentDataPath, JSON.stringify(peopleData), 'utf8', () => {
      console.log('\nUpdated persistent stored data.');
    });
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected from ' + socket.handshake.address);
  });
});
