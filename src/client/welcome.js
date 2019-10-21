import React from 'react';
import {Route, Link, BrowserRouter as Router, Redirect} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from "react-transition-group";

import background from './imgs/background.jpg';
import './views/index.css';
import './views/user.css';

import Plans from './your-plans.js'

class Welcome extends React.Component {
  animate() {
    console.log("anim");
    document.getElementById('dash-animate').className = 'user-page user-page-animate';
  }

  render() {
    return (
      // <CSSTransition transitionName="welcomeTrans" timeout={300}>
      <div className='welcomeTrans' id='welcome-page'>
          <div className='background-img'>
              <img src={background} />
          </div>
          <div className='welcome-content'>
              <div className='to-dash' onClick={this.animate.bind(this)}>to dashboard</div>
          </div>
      </div>
      // </CSSTransition>
    )
  }
}

export default Welcome;
