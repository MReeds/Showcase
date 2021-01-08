import React from 'react';
import { withRouter, Link } from 'react-router-dom';


const NavBar = (props) => {

  return (
    <header>
      <h1 className="site-title">
        Showcase
      </h1>
      <nav>
        <ul className="navbar">
          <li>
            <Link className="navbar__item" to="/"> Home </Link>
          </li>
          <li>
            <Link className="navbar__item" to="/newUserForm"> New User </Link>
          </li>
          <li>
            <Link className="navbar__item" to="/login">Account Photo</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(NavBar)