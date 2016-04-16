import React from 'react';

export default class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <nav className="pink">
        <div className="nav-wrapper row">
          <div className="col s12 center-align">
            <a href="#" className="brand-logo">{this.props.title}</a>
          </div>
        </div>
      </nav>);
  }
}
