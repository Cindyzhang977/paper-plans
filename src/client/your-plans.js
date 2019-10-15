import React from 'react';
import ReactDOM from 'react-dom';
import './views/index.css';
import './views/user.css';
import './views/your-plans.css'

class Plans extends React.Component {
  constructor(props) {
    super(props);
    this.addPlan.bind(this);
    this.state = {
      numPlans: 0,
      plans: [],
    }
  }

  addPlan() {

  }

  render() {

    return (
      <div>
          <h1>Your Paper Plans</h1>
          <div className='add-button'>+</div>
      </div>
    )
  }
}

export default Plans;
