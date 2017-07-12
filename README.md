# Tech Test

![screenshot](http://i.imgur.com/WFDvzGS.png)

My approach to this (surprisingly fun) technical test was to try and write clean, consistent, readable code. Employing the KISS (Keep It Simple, Stupid!) method where possible but not re-inventing the wheel.

So to that end, I chose to use the following key technologies to create the project:

## Technologies Used

* [Express](https://github.com/expressjs/express) - Node based web framework
* [React](https://facebook.github.io/react/) - Javascript front end framework
* [Socket.io](https://github.com/socketio/socket.io) - Realtime communication with the server
* [Create-react-app](https://github.com/facebookincubator/create-react-app) - Skeleton boilerplate to save a little time
* [Node-sass](https://github.com/sass/node-sass) - SCSS -> CSS compilation
* [Eslint (react)](https://www.npmjs.com/package/eslint-plugin-react) - Coding standards are important!
* [Scss Lint](https://github.com/brigade/scss-lint) - Even for Scss!

## Installation

    npm install

## Run the server and app

    npm start

## Development

During development of the front end, start the server with:

    npm run serve

And simultaneously, let the front end compile by running:

    npm run compile

## Build for production server

    npm run build

## Run Tests

Unit tests are set up to notice very basic hangups to show the concept, rather than pick up issues exhaustively.

    npm test

## Future Improvements

If I had more time, I'd proceed to start writing server and client-side validation for the inputs as well as typical CRUD features (add a person, remove, re-arrange the order, etc).

Also some extra UX touches would be nice, such as confirmation that your edit has indeed been saved on the server - perhaps a tick icon.

This was a small project (5 or 6 hours over the course of one very long evening) to demonstrate a variety of skills. It is by no means a complex app but rather a well thought-out solution, lovingly built from the ground up.
