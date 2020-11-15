import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from '../components/Nav.jsx';
import HomeScreen from '../screens/HomeScreen.jsx';
import PollScreen from '../screens/PollScreen.jsx';
import SigninScreen from '../screens/SigninScreen.jsx';
import RegisterScreen from '../screens/RegisterScreen.jsx';
import ProfileScreen from '../screens/ProfileScreen.jsx';

function Routes() {
  const [userSignin, setUserSignin] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  // console.log(`userInfo: ${userInfo} UserSignin: ${userSignin}`);

  return (
    <Router>
      <div className="grid-container">
        <Nav userInfo={userInfo} />
        <main className="main">
          <div className="content">
            <Switch>
              <Route exact path="/profile">
                <ProfileScreen
                  userInfo={userInfo}
                  setUserSignin={setUserSignin}
                />
              </Route>
              <Route exact path="/signin">
                <SigninScreen
                  setUserSignin={setUserSignin}
                  setUserInfo={setUserInfo}
                />
              </Route>
              <Route exact path="/register">
                <RegisterScreen />
              </Route>
              <Route exact path="/poll/:id">
                <PollScreen />
              </Route>
              <Route exact path="/">
                <HomeScreen />
              </Route>
            </Switch>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default Routes;
