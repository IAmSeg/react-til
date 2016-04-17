import React from 'react';
import Base from './Base';

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
