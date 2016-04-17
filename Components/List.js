import React from 'react';
import Base from './Base';
import Collection from './Collection';
import Section from './Section';

import { isFileInDirectory, getDirectories, getFriendlyName, getFileName, stripExtension, repoPath } from '../utilities/file-utilities';
import fs from 'fs';
import { capitalize } from '../utilities/word-utilities';

/**
 * Main class that holds the List of items
 */
export default class List extends Base {
  constructor() {
    super();
  }

  render() {
    let collections = this.buildCollections();
    let content = (
      <ul className="collection with-header">
        {collections}
      </ul>
    );
    return (
      <Section className="col s12" content={content} />
    );
  }

  buildCollections() {
    const files = this.props.files;
    const dirs = getDirectories(repoPath);

    let collections = dirs.map(dir => {
      // Get all the files in this directory
      let filesInDir =
        files
          .filter(file => {
            let dirName = `${repoPath}/${dir}`;
            return isFileInDirectory(dirName, file);
          })
          .map(file => ({ fileName: stripExtension(getFileName(file)), friendlyName: getFriendlyName(file) }));

      return <Collection key={dir} name={capitalize(dir)} files={filesInDir} />;
    });

    return collections;
  }
}
