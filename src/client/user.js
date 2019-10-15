import React from 'react';
import {Route, Link, BrowserRouter as Router, Redirect} from 'react-router-dom';
import './views/index.css';
import './views/user.css';

import Dashboard from './dashboard.js';
import Plans from './plans.js';
import Memories from './memories.js';
import Profile from './profile.js';

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Router>
        <div>
          <div className='background-img'>
          </div>
          <div className='user-interface'>
            <div className='navbar'>
              <ul>
                <li className='navItem'><Link to="/dashboard">Dashboard</Link></li>
                <li className='navItem'><Link to="/your-plans">Plans</Link></li>
                <li className='navItem'><Link to="/memories">Memories</Link></li>
                <li className='navItem'><Link to="/profile">Profile</Link></li>
              </ul>
            </div>
            <div className='routes'>
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/your-plans' component={Plans} />
              <Route path='/memories' component={Memories} />
              <Route path='/profile' component={Profile} />
            </div>
          </div>
        </div>
      </Router>
    );

  }

}

export default User;
