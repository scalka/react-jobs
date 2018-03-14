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
      location: '',
      submit: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

		//console.log(`Input name ${name}. Input value ${value}.`);

    this.setState({
      // if no square brackets around name - the value is hardcoded
      // [name] => ][event.targer.name]  accesses object property name programatically
      [name]: value
    });
  }

  submitForm() {
    this.setState({
      // if no square brackets around name - the value is hardcoded
      // [name] => ][event.targer.name]  accesses object property name programatically
      submit: true
    });
  }

  render() {
    if(this.state.submit === true) {
      return ( < Muse data={this.state}/> )
    }
    return (
      <div>
      <form>
        <label>
          Category:
          <input
            name="category"
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Company:
          <input
            name="company"
            type="text"
            value={this.state.email}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Level:
          <input
            name="level"
            type="text"
            value={this.state.number}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Location:
          <input
            name="location"
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleInputChange} />
        </label>
        <br />
      </form>
      <h1>Hi, {this.state.name}! You have selected a {this.state.number} month contract {this.state.insurance ? 'with' : 'without'} insurance.</h1>

      <button type="btn1" onClick={(e) => this.submitForm()}>UP</button>

      </div>
    );
  }
}

export default Form
