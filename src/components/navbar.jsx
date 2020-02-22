import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Counter <span className={this.getBadgeClasses()}>{this.props.totalCounters}</span>
        </a>
        <button
          onClick={this.props.onResetAll}
          className="btn btn-primary m-2">
          Clear All
        </button>
      </nav>
    );
  }

  getBadgeClasses() {
    let classes = 'badge badge-pill badge-';
    classes += this.props.totalCounters === 0 ? 'secondary' : 'danger';
    return classes;
  }
}

export default NavBar;