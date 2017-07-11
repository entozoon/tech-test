// Dependencies
const express = require('express'),
  app = express(),
  path = require('path');

// Variables
const port = 3000;

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

// Create a socket.io instance using the server
const io = require('socket.io')(server);

io.on('connection', client => {
  client.on('message', data => {
    console.log('Message received: ' + data);
  });
});
