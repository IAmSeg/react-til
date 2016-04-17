import React from 'react';
import Base from './Base';

/**
 * Component to display a particular item in a List
 * @props {dirName} - the name of the directory of this file
 * @props {fileName} - the name of this particular file
 * @props {friendlyName} - the human friendly name of the file
 */
export default class ListItem extends Base {
  constructor() {
    super();
  }

  render() {
    let link = `/read/${this.props.dirName}/${this.props.fileName}`;
    return <li className="collection-item"><a href={link}>{this.props.friendlyName}</a></li>
  }
}
