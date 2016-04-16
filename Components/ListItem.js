import React from 'react';
import Base from './Base';

export default class ListItem extends Base {
  constructor() {
    super();
  }

  render() {
    return <li className="collection-item"><a href="#">{this.props.fileName}</a></li>  
  }
}
