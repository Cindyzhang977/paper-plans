import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, Redirect, BrowserRouter as Router} from 'react-router-dom';
import './client/views/index.css';

import User from './client/user.js';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    }
  }

  render() {
    //login to user dashboard
    if (this.state.login) {
      return <Redirect to='/dashboard' />;
    }

    return (
      <div className='login-buttons'>
        <button className='login-button' onClick={() => this.setState({login: true})}>Log In</button>
      </div>
    )
  };
}


const routing = (
  <Router>
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/dashboard' component={User} />
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);
