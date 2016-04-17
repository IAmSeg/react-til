import React from 'react';
import Base from './Base';

export default class ListItem extends Base {
  constructor() {
    super();
  }

  render() {
    let link = `/read/${this.props.dirName}/${this.props.fileName}`;
    return <li className="collection-item"><a href={link}>{this.props.friendlyName}</a></li>
  }
}
