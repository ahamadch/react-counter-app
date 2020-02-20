import React, { Component } from 'react';

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Navbar <span className="badge badge-pill badge-secondary">{props.totalCounters}</span>
      </a>
      <button
        onClick={props.onResetAll}
        className="btn btn-primary m-2">
        Reset All
      </button>
    </nav>
   );
}

export default NavBar;