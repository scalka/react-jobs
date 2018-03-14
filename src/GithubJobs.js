import React, { Component } from 'react';
import './App.css';
const querystring = require('querystring');

class GithubJobs extends Component {
  constructor() {
		super();
		this.state = {
      description: 'python',
      location: 'new+york'
		};
		// This binding is necessary to make `this` work in the onclick callback
		// this.handleClick = this.handleClick.bind(this);
	}
  componentWillMount() {
    let params = {
      description : this.state.description,
      location : this.state.location
    }
    let request = querystring.stringify(params);
    console.log(`${params.page}`);
    https://jobs.github.com/positions?description=python
    fetch(`https://jobs.github.com/positions.json?description=${params.description}`)
    .then(response => {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(data => {
      const all = data.results;
      console.log(all);
      // could be re-written so that here we store only data in state and we generate html in render
/*      const allUsers = all.map( (u) => {
        return (
           <li key={u.login.md5}>
              <h2>{u.name.first} {u.name.last}</h2> <h3>{u.email}</h3>
            </li>
              )
      });*/
/*
      this.setState( {
        allUsers: allUsers,
        allUsersData: all
      });*/
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <p>GithubJobs</p>
    );
  }
}

export default GithubJobs;
