import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import List from '../Components/List';
import Header from '../Components/Header';
import Content from '../Components/Content';

import recursive from 'recursive-readdir';
import path from 'path';
import fs from 'fs';
import { repoPath, ignoreFunc } from '../utilities/file-utilities';
import marky from 'marky-markdown';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  // Get all the files
  recursive(repoPath, [ignoreFunc], (err, files) => {
    if (err) {
      console.log(err);
      return;
    }

    // Render our index view with the List and Header components
    const list = ReactDOMServer.renderToString(<List files={files} basePath={repoPath}/>);
    const header = ReactDOMServer.renderToString(<Header color="pink" className="col s12 center-align" title="TIL" />);
    res.render('index', { list, header });
  });
});

/* GET page for reading a file */
router.get('/read/:dir/:name', (req, res, next) => {
  const title = req.params.name;
  const dirName = req.params.dir;
  const fileContents = fs.readFileSync(path.join(repoPath, dirName, title + '.md'));
  const markdown = marky(fileContents.toString()).html();

  // Build header component
  const header = ReactDOMServer.renderToString(<Header color="blue" className="col s12 left-align" title="TIL" category={dirName} />);
  const contents = ReactDOMServer.renderToString(<Content className="col s12" contents={markdown} />);

  res.render('read', { header, contents, title, dirName });
});

export default router;
