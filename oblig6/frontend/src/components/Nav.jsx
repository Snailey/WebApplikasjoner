import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  const signout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const Button = styled.button`
    background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
    color: ${(props) => (props.primary ? 'white' : 'palevioletred')};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;

  if (localStorage.getItem('user')) {
    return (
      <header>
        <ul>
          <li>
            <Link to="/">
              <h1>STEM - på hva du vil!</h1>
            </Link>
          </li>
          <li>
            <Link to="/profile/">
              <h2>{localStorage.getItem('user')}</h2>
            </Link>
          </li>
          <li>
            <Button type="button" onClick={signout}>
              Logg Ut
            </Button>
          </li>
        </ul>
        <div className="header-links" />
      </header>
    );
  }

  return (
    <header>
      <ul>
        <li>
          <Link to="/">STEM - på hva du vil!</Link>
        </li>
        <li>
          <Link to="/signin">Logg Inn</Link>
        </li>
      </ul>
      <div className="header-links" />
    </header>
  );
};

export default Nav;
