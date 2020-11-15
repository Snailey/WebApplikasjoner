import React, { useState } from 'react';
import styled from 'styled-components';
import { update } from '../utils/userService.js';
import UserPollsScreen from './UserPollScreen.jsx';

function ProfileScreen(props) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

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

  const handleLogout = () => {
    props.setUserSignin = null;
  };

  const handleUpdate = (e) => {
    setName(e.currentTarget.value);
    setPassword(e.currentTarget.value);
    setEmail(e.currentTarget.value);
    const id = localStorage.getItem('id');
    const data = { name, password, email };
    update(id, data);
  };

  return (
    <div className="profile">
      <div className="profile-info">
        <div className="form">
          <form onSubmit={handleUpdate}>
            <ul className="form-container">
              <li>
                <h2>Bruker Profil</h2>
              </li>
              <li>
                <h4>Endre brukeropplysninger</h4>
              </li>
              <li>
                <label htmlFor="name">Navn</label>
                <input
                  value={name}
                  type="name"
                  name="name"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor="email">Epost</label>
                <input
                  value={email}
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor="password">Passord</label>
                <input
                  value={password}
                  type="password"
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </li>
              <li>
                <Button
                  type="submit"
                  onClick={handleUpdate}
                  className="button primary"
                >
                  Oppdater
                </Button>
              </li>
              <li>
                <Button
                  type="button"
                  onClick={handleLogout}
                  className="button secondary full-width"
                >
                  Logg Ut
                </Button>
              </li>
            </ul>
          </form>
        </div>
      </div>
      <UserPollsScreen />
    </div>
  );
}

export default ProfileScreen;
