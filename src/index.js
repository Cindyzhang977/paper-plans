import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import './client/views/index.css';

class HomePage extends React.Component {

  render() {
    return (
      <div className="login-buttons">
        <button>Log In</button>
      </div>
    )
  };
}


const routing = (
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);
