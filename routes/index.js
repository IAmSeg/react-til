import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../Components/App';
import Header from '../Components/Header';
import fs from 'fs';
// import marked, { Renderer } from 'marked';
// import marky from 'marky-markdown';

const router = express.Router();

// Get our files from file system
// let buffer = new Buffer([]);
// buffer = fs.readFileSync('javascript.md');

/* GET home page. */
router.get('/', (req, res, next) => {
  // res.render('index', { reactHtml: ReactDOMServer.renderToString(<App contents={marky(buffer.toString()).html()} />)} );
  res.render('index', { reactHtml: ReactDOMServer.renderToString(<App content="react element" />),
                        header: ReactDOMServer.renderToString(<Header />) });
});

export default router;
