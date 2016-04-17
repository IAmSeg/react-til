import Base from './Base';
import React from 'react';
import ListItem from './ListItem';

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
      return <ListItem dirName={this.props.name} fileName={file.fileName} friendlyName={file.friendlyName} />
    });
  }
}
