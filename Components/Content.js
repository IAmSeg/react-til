import React from 'react';
import Base from './Base';

/**
 * This class is responsible for displaying some content inside a container
 * @props {className} - css class name to apply
 * @props {contents} - contents to be displayed in the container
 */
export default class Content extends Base {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h3>{this.props.title}</h3>
          <div className={this.props.className} dangerouslySetInnerHTML={{__html: this.props.contents}} />
        </div>
      </div>
    );
  }
}
