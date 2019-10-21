import React from 'react';
import {Route, Link, BrowserRouter as Router, Redirect} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import background from './imgs/background.jpg';
import './views/index.css';
import './views/user.css';

import Welcome from './welcome.js';
import Plans from './your-plans.js';
import Memories from './memories.js';
import Profile from './profile.js';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePath: 'Plans',
      toHome: false,
    }
  }

  render() {

    if (this.state.toHome) {
      return <Redirect to='/' />
    }

    //mapping to generate navigation items in navbar
    var pathsDict = {'Plans' : '/your-plans', 'Memories' : '/memories', 'Profile' : '/profile'};
    var tabs = ['Plans', 'Memories', 'Profile'].map((path) => {
        var className = 'navItem';
        if (path === this.state.activePath) {
            className += ' active-page';
        }
        return <Link key={path} className={className} onClick={() => {this.setState({activePath: path})}}to={pathsDict[path]}>{path}</Link>
    })

    return(
      <Router>
        <div className='user-page' id='dash-animate'>
            <Welcome />
            <div className='user-interface' id='dashboard'>
                <div className='navbar'>
                    <div id='logo'className='navItem'>PAPER PLANS</div>
                    <a href='#welcome-page'><div className='navItem'>Home</div></a>
                    {tabs}
                    <div className='navItem' onClick={() => {this.setState({toHome: true})}}>Logout</div>
                </div>
                <div className='routes'>
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
