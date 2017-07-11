// Dependencies
const app = require('express')(),
  path = require('path');

// Variables
const port = 3000;

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'));
});

// Create a simple http server using express
const server = app.listen(port, error => {
  if (error) {
    console.log(error);
  } else {
    let url = 'http://localhost:' + port;
    console.log('Listening at ' + url);
  }
});

const io = require('socket.io')(server);

io.on('connection', client => {
  client.on('message', data => {
    console.log('Message received: ' + data);
  });
});
