import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import List from '../Components/List';
import Header from '../Components/Header';
import Content from '../Components/Content';

import recursive from 'recursive-readdir';
import path from 'path';
import fs from 'fs';
import { repoPath, ignoreFunc, getFriendlyName } from '../utilities/file-utilities';
import marky from 'marky-markdown';

import winston from 'winston';
const logger = new (winston.Logger)({
  transports: [
    // uncomment to log to file
    // new (winston.transports.File)({ filename: '../error.log', level: 'error' })
    new winston.transports.Console({
      json: true,
      level: 'error'
    })
  ]
});

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  // Get all the files
  recursive(repoPath, [ignoreFunc], (err, files) => {
    if (err) {
      logger.log('error', err);
      return;
    }

    // Render our index view with the List and Header components
    const list =
      ReactDOMServer.renderToString(<div className="container"><List files={files} basePath={repoPath}/></div>);
    const header =
      ReactDOMServer.renderToString(<Header color="green accent-4" className="col s12" title="Today I Learned..." />);
    res.render('index', { list, header });
  });
});

/* GET page for reading a file */
router.get('/read/:dir/:name', (req, res, next) => {
  const title = req.params.name;
  const friendlyTitle = getFriendlyName(title);
  const dirName = req.params.dir
  let fileContents;

  // Try to read this file
  try {
    fileContents = fs.readFileSync(path.join(repoPath, dirName.toLowerCase(), title + '.md'));
  }
  catch(err) {
    logger.log('error', err);
  }

  const markdown = marky(fileContents.toString()).html();

  // Build header component
  const header =
    ReactDOMServer.renderToString(<Header color="blue" className="col s12" title="Today I Learned" category={dirName} />);
  const contents =
    ReactDOMServer.renderToString(<Content className="col s12" title={friendlyTitle} contents={markdown} />);

  res.render('read', { header, contents, title, dirName });
});

export default router;
