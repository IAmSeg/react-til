import React from 'react';
import Base from './Base';

/**
 * Class for a material design navbar
 * @props {title} - title for the nav
 * @props {color} - material design color for the nav
 * @props {category} - more specific category to display in the header
 */
export default class Header extends Base {
  constructor() {
    super();
  }

  render() {
    let title = this.props.title;
    if (this.props.category)
      title += ` - ${this.props.category}`;

    return (
      <nav className={this.props.color}>
        <div className="nav-wrapper row">
          <div className={this.props.className}>
            <a href="/" className="brand-logo">{title}</a>
          </div>
        </div>
      </nav>);
  }
}
