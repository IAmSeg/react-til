
import express from 'express';
import path from 'path';
import logger from 'morgan';
import winston from 'winston';
import expressWinston from 'express-winston';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import handlebars from 'express-handlebars';
import fs from 'fs';

import routes from './routes/index';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Header from './Components/Header';
import Content from './Components/Content';

const app = express();

// view engine setup
app.engine('handlebars', handlebars({defaultLayout: 'layout'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

// setup the loggers
app.use(expressWinston.logger({
  transports: [
    new winston.transports.File({
      filename: './error.log',
      level: 'info'
    }),
    new winston.transports.Console({
      json: true,
      level: 'error'
    })
  ]
}));

const accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});
app.use(logger('combined', { stream: accessLogStream }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Static dirs
app.use('/scripts', express.static(path.join(__dirname, 'node_modules/')));
app.use('/materialize', express.static(path.join(__dirname ,'node_modules/materialize-css/')));
app.use(express.static(path.join(__dirname, 'builds')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
app.use((err, req, res, next) => {
  const header = ReactDOMServer.renderToString(<Header title="Error" className="col s12" color="red" />);
  const responseObject = { header };
  const title = 'What have you done?!';
  const message =
    ReactDOMServer.renderToString(<div className="row">
      <p>Something went wrong here, how about you head back <a href="/">home</a>?</p>
    </div>);

  res.status(err.status || 500);

  responseObject.message = ReactDOMServer.renderToString(<Content className="col s12" title={title} contents={message} />);
  
  if (app.get('env') === 'development')
    responseObject.error = ReactDOMServer.renderToString(<Content className="col s12" contents={err} />);

  res.render('error', responseObject);
});

export default app;
