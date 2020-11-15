import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { signin } from '../utils/userService.js';

function SigninScreen() {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [userId, setUserId] = useState(null);

  const Button = styled.button`
    background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
    color: ${(props) => (props.primary ? 'white' : 'palevioletred')};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;
  const Form = styled.form`
    width: 100%;
    background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
    color: ${(props) => (props.primary ? 'white' : 'palevioletred')};
  `;

  const submitHandler = async (e) => {
    e.preventDefault();
    const { data, error } = await signin({
      email,
      password,
    });
    if (error) {
      setError('Wrong password or username');
    } else {
      setError(null);
      localStorage.clear();
      localStorage.setItem('user', data.name);
      localStorage.setItem('email', data.email);
      localStorage.setItem('id', data._id);
      window.location = '/';
    }
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h2>Logg Inn</h2>
            <h4>{userId}</h4>
          </li>
          <li>
            <label htmlFor="email">Epost</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="password">Passord</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>
          <li>
            <Button type="submit" className="button primary">
              Logg Inn
            </Button>
          </li>
          <li>Ny Bruker?</li>
          <li>
            <Link to="/register">Opprett konto</Link>
          </li>
        </ul>
      </form>
    </div>
  );
}
export default SigninScreen;
