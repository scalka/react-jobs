import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GithubJobs from './GithubJobs';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import JobCard from './Components/JobCard';
import DropDown from './Components/DropDown';
import SortRadioButton from './Components/SortRadioButton';
import LabelledInput from './Components/LabelledInput';
import ToggleButton from './Components/ToggleButton';
const querystring = require('querystring');


class App extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      page: 0,
      company: '',
      level: '',
      location: '',
      jobs: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.fetchJobs = this.fetchJobs.bind(this);
  }

  componentWillMount() {
  }

  handleChange(event) {
    // handle both of the <select> UI elements
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log(value);
    this.setState({
      [name]: value
    });
  }

  fetchJobs(event) {
    console.log(this.state.category);
    let config = require('./config.json');
    let museKey = config.museKey;
    let parameters = [];
    for(let param in this.state) {
      if(`${this.state[param]}` && param !== 'jobs') {
        console.log(param);
        console.log(`${this.state[param]}`);
        parameters[param] = `${this.state[param]}`
      }
    }
    let request = querystring.stringify(parameters);
    console.log(`https://api-v2.themuse.com/jobs?api_key=${museKey}&${request}`);

    fetch(`https://api-v2.themuse.com/jobs?api_key=${museKey}&${request}`)
    .then(response => {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(data => {
      const jobs = data.results.map(job => {
        return {
          name: job.name
        }
      });
      this.setState({jobs: jobs});
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    let jobList;
    if(this.state.jobs) {
      console.log(this.state.jobs);
      jobList = this.state.jobs.map(job => {
        return (
            <JobCard key={job.name} name={job.name}/>
        );
      });
    }

    return (
      <div>
      <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to My App</h1>

            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/results">Contact Us</Link></li>
            </ul>
            <hr/>
            <Route exact path='/'/>
            <hr/>
          </div>
      </BrowserRouter>

      <LabelledInput name="category" label="Search by category" value={this.state.category} handleChange={this.handleChange}/>
      <LabelledInput name="company" label="Search by company" value={this.state.company} handleChange={this.handleChange}/>

      <button name={this.props.name} className="button is-dark" onClick={this.fetchJobs}>Fetch</button>


      <section className="section">
      <div className="columns is-multiline">
        {jobList}
      </div>
      </section>
      </div>
    );
  }
}

export default App;
