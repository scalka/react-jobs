import React from 'react';
import ReactDOM from 'react-dom';
import Muse from './Muse';

class Form extends React.Component {
  constructor(props) {
    super(props);
    //the name of input must match state elemetns
    this.state = {
      company: '',
      category: 'Data Science',
      page: 0,
      level: '',
      location: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    // name the inputs to match their corresponding values in state
		// console.log(`Input name ${name}. Input value ${value}.`);
    this.setState({
      // if no square brackets around name - the value is hardcoded
      // [name] => ][event.targer.name]  accesses object property name programatically
      [name]: value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    console.log("onSubmit");
  }

  render() {
    return (
      <div>
      <form>
        <label>
          Category:
          <input
            name="category"
            type="text"
            value={this.state.category}
            onChange={this.onChange} />
        </label>
        <br />
        <label>
          Company:
          <input
            name="company"
            type="text"
            value={this.state.email}
            onChange={this.onChange} />
        </label>
        <br />
        <label>
          Level:
          <input
            name="level"
            type="text"
            value={this.state.number}
            onChange={this.onChange} />
        </label>
        <br />
        <label>
          Location:
          <input
            name="location"
            type="checkbox"
            checked={this.state.checked}
            onChange={this.onChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
        <a onClick={this.props.callback}>Click me</a>
      </form>
      <h1>Hi, {this.state.category}! You have selected a {this.state.number} month contract {this.state.insurance ? 'with' : 'without'} insurance.</h1>
      </div>
    );
  }
}

export default Form
