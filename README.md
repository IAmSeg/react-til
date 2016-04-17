# React TIL

A small "Today I Learned" application written using Node, express and React. This app will read from a file system and generate a hierarchy of "TILs" and display them on a web page. You could point this app at a git repo and let all your people commit to it and let the app do its thing.

[![Build Status](https://travis-ci.org/MrDoctorJ/react-til.svg?branch=master)](https://travis-ci.org/MrDoctorJ/react-til)

### Server Side Rendering

All the pages are rendered server-side using isomorphic React. React could also be used on the client-side to make interactive components but this has not been done currently, although Webpack is setup and able to handle es6/react/jsx files. Client-side files goes in the `client` folder.

### Testing

Mocha is setup for running regular JavaScript tests. Run `npm test` to run the tests.

### Running

`npm start` will run webpack and then nodemon with an environment variable set to PRODUCTION.

`npm run debug` will run webpack and then nodemon with an environment variable set to DEVELOPMENT.
