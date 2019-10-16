import React from 'react';
import {Route, Link, BrowserRouter as Router, Redirect} from 'react-router-dom';
import background from './imgs/background.jpg';
import './views/index.css';
import './views/user.css';

import Dashboard from './dashboard.js';
import Plans from './your-plans.js';
import Memories from './memories.js';
import Profile from './profile.js';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePath: 'Dashboard',
    }
  }

  render() {

    //mapping to generate navigation items in navbar
    var pathsDict = {'Dashboard' : '/dashboard', 'Plans' : '/your-plans', 'Memories' : '/memories', 'Profile' : '/profile'};
    var tabs = ['Dashboard', 'Plans', 'Memories', 'Profile'].map((path) => {
        var className = 'navItem';
        if (path === this.state.activePath) {
            className += ' active-page';
        }
        return <Link key={path} className={className} onClick={() => {this.setState({activePath: path})}}to={pathsDict[path]}>{path}</Link>
    })

    return(
      <Router>
        <div className='user-page'>
            <div className='background-img'>
                <img src={background} />
            </div>
            <div className='user-interface'>
                <div className='navbar'>
                    {tabs}
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
