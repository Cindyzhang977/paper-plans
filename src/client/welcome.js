import React from 'react';
import {Route, Link, BrowserRouter as Router, Redirect} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import background from './imgs/background.jpg';
import './views/index.css';
import './views/user.css';

import Plans from './your-plans.js'

class Welcome extends React.Component {
  render() {
    return (
      <div>
          <div className='background-img'>
              <img src={background} />
          </div>
          <div className='welcome-content'>
              <div className='to-dash'><Link to='/your-plans'>to dashboard</Link></div>
          </div>
          <Router>
              <Route path='/your-plans' component={Plans} />
          </Router>
      </div>
    )
  }
}

export default Welcome;
