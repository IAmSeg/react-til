import React from 'react';
import Base from './Base';

export default class List extends Base {
  constructor() {
    super();
  }

  render() {
    return (
      <ul className="collection with-header">
        {this.props.files}
      </ul> );
  }
}
