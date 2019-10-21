import React from 'react';
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
      <div className='plan-container'>
        <div className='plan-collapsed'>{this.props.name}</div>
        <div className='dropdown-button'>=</div>
      </div>
    )
  }

}

export default Plan;
