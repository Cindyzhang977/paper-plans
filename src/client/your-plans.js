import React from 'react';
import ReactDOM from 'react-dom';
import './views/index.css';
import './views/user.css';
import './views/your-plans.css'

import Plan from './plan.js';

class Plans extends React.Component {
  constructor(props) {
    super(props);
    this.addPlan.bind(this);
    this.state = {
      numPlans: 0,
      plans: [],
      displayForm: false,
    }
  }

  /* add a plan to this.state.plans using information user passes in in PlanForm */
  addPlan(name, description, completeBy) {
    this.setState({displayForm: false});
    this.setState(prevState => ({
      numPlans: prevState.numPlans + 1,
    }));
    this.state.plans.upshift(<Plan name={name} />);
    console.log('added a plan');
  }

  render() {
    var form = this.state.displayForm ? <PlanForm addPlan={this.addPlan} /> : <div></div>;
    // var plans plans.map(() => ); // map
    console.log('render your plans');
    return (
      <div>
          <h1>Your Paper Plans</h1>
          <div className='add-button' onClick={() => {this.setState({displayForm: true})}}>+</div>
          {form}
          {this.state.plans.map((item, index) => {
                        return <div key={index}>{item}</div>;
                      })}
      </div>
    )
  }
}


/* class that collects info from user to form a paper plan */
class PlanForm extends React.Component {
  constructor(props) {
    super(props);
    //props: addPlan() from Plans
    this.state={
      name: '',
      description: '',
      completeBy: '',
    }
  }

  onNameChange(e) {
    this.setState({name: e.target.value});
  }

  onDescriptionChange(e) {
    this.setState({description: e.target.value});
  }

  onCompleteByChange(e) {
    this.setState({completeBy: e.target.value});
  }

  render() {
    return (
        <form className='plan-form' autoComplete='off'>
            <input type='text' name='name' className='form-input' placeholder='name' onChange={this.onNameChange.bind(this)} required/><br />
            <input type='text' name='description' className='form-input description' placeholder='description' onChange={this.onDescriptionChange.bind(this)} /><br />
            <input type='text' name='completeBy' className='form-input' placeholder='complete by' onChange={this.onCompleteByChange.bind(this)} /><br />
            <div className='submit-buttons'>
                <button className='alt-button'>Cancel</button>
                <button onSubmit={() => this.props.addPlan(this.state.name, this.state.description, this.state.completeBy)}>Create</button>
            </div>
        </form>
    );
  }

}

export default Plans;
