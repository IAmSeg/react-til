import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import List from '../Components/List';
import Header from '../Components/Header';

import recursiveReadSync from 'recursive-readdir-sync';
import path from 'path';


const repoPath = path.join(__dirname, '../test-files');
let files;

try {
  files = recursiveReadSync(repoPath);
}
catch(err) {
  if(err.errno === 34) {
    console.log('Path does not exist');
  }
  else {
    throw err;
  }
}

console.log(files);

const router = express.Router();
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { reactHtml: ReactDOMServer.renderToString(<List files={files} />),
                        header: ReactDOMServer.renderToString(<Header title="TIL" />) });
});

export default router;
