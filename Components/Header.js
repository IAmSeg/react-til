import React from 'react';

export default class Header extends React.Component {
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
