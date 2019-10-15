import React from 'react';
import {Route, Link, BrowserRouter as Router, Redirect} from 'react-router-dom';
import './views/index.css';

import Dashboard from './dashboard.js';
import Plans from './plans.js';
import Memories from './memories.js';
import Profile from './profile.js';

class User extends React.Component {

  render() {
    return(
      <Router>
        <div>
          <div className="navbar">

          </div>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/your-plans" component={Plans} />
          <Route path="/memories" component={Memories} />
          <Route path="/profile" component={Profile} />
        </div>
      </Router>
    );

  }

}

export default User;
