import React from 'react';
import Base from './Base';

export default class App extends Base {
  constructor() {
    super();
  }

  render() {
    return <div>{this.props.content}</div>
  }
}
