import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container h-flex">
          <Link to="/" className="logo">
            <img src={logo} alt="logo"></img>
          </Link>
          <nav className="link">
            <ul>
              <li>
                <Link to="/" className="menu__link">
                  Лента
                </Link>
              </li>
              <li>
                <Link to="/profile" className="menu__link">
                  Профиль
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
