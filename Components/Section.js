import React from 'react';
import Base from './Base';

/**
 * Displays a particular material design section
 * @props {className} - css class name to apply
 * @props {content} - content for the section
 */
export default class Section extends Base {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="section">
        <div className="row">
          <div className={this.props.className}>
            {this.props.content}
          </div>
        </div>
      </section>
    )
  }
}
