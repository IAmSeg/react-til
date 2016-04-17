import React from 'react';
import Base from './Base';

/**
 * This class is responsible for displaying some content inside a container
 */
export default class Content extends Base {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className={this.props.className} dangerouslySetInnerHTML={{__html: this.props.contents}} />
        </div>
      </div>
    );
  }
}
