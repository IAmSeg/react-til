import Base from './Base';
import React from 'react';
import ListItem from './ListItem';

/**
 * Defines a material design Collection
 * @props {files} - list of files for this collection
 * @props {name} - name of the collection
 */
export default class Collection extends Base {
  constructor() {
    super();
  }

  render() {
    let items = this.buildItems();
    return (
      <div>
        <li className="collection-header"><h4>{this.props.name}</h4></li>
        {items}
      </div>
    );
  }

  buildItems() {
    const files = this.props.files;
    return files.map(file => {
      return <ListItem key={file.fileName} dirName={this.props.name} fileName={file.fileName} friendlyName={file.friendlyName} />
    });
  }
}
