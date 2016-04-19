[![Build Status](https://travis-ci.org/MrDoctorJ/react-til.svg?branch=master)](https://travis-ci.org/MrDoctorJ/react-til)
[![Dependency Status](https://david-dm.org/mrdoctorj/generator-future-webapp.svg)](https://david-dm.org/mrdoctorj/generator-future-webapp)
[![devDependency Status](https://david-dm.org/mrdoctorj/react-til/dev-status.svg)](https://david-dm.org/mrdoctorj/react-til#info=devDependencies)
[![Code Climate](https://codeclimate.com/github/MrDoctorJ/react-til/badges/gpa.svg)](https://codeclimate.com/github/MrDoctorJ/react-til)
[![Issue Count](https://codeclimate.com/github/MrDoctorJ/react-til/badges/issue_count.svg)](https://codeclimate.com/github/MrDoctorJ/react-til)
[![Heroku](https://heroku-badge.herokuapp.com/?app=shrouded-anchorage-80753)](https://shrouded-anchorage-80753.herokuapp.com)

# React TIL

A small "Today I Learned" application written using Node, express and React. This app will read from a directory containing markdown files and generate a hierarchy of "TILs" and display them on a web page. You could point this app at a git repo and let all your people commit to it and let the app do its thing.

You can see the a sample of the app deployed on Heroku [here](https://shrouded-anchorage-80753.herokuapp.com)

### Setup

Set the `repoPath` variable in `utilities/file-utilities.js` to your directory or git repo.

Your files should be markdown and names should be dasherized, like `this-is-my-file.md`.

### Server Side Rendering

All the pages are rendered server-side using isomorphic React. React could also be used on the client-side to make interactive components but this has not been done currently, although Webpack is setup and able to handle es6/react/jsx files, as well as importing HTML and PostCSS files. Client-side files goes in the `client` folder.

### Testing

Mocha is setup for running regular JavaScript tests. Run `npm test` to run the tests.

### Running

`npm start` will run webpack witih production config and then nodemon with an environment variable set to PRODUCTION.

`npm run debug` will run webpack with dev config and then nodemon with an environment variable set to DEVELOPMENT.

App will be running on `localhost:3000`
