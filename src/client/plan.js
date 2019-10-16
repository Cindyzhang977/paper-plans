import React from 'react';
import ReactDOM from 'react-dom';
import './views/index.css';
import './views/user.css';
import './views/your-plans.css'

class Plan extends React.Component {

  constructor(props) {
    super(props);
    //props: name, description, completeBy from Plans
  }

  render() {
    return (
      <div>{this.props.name}</div>
    )
  }

}

export default Plan;
