import React, { Component } from 'react';
import './App.css';
const querystring = require('querystring');

class Muse extends Component {
  constructor() {
		super();
		this.state = {
      page: 0,
      category: 'Data%20Science'
		};
		// This binding is necessary to make `this` work in the onclick callback
		// this.handleClick = this.handleClick.bind(this);
	}
  componentWillMount() {
    let config = require('./config.json');
    let museKey = config.museKey;
    let params = {
      page : this.state.page,
      category : this.state.category
    }
    let request = querystring.stringify(params);

    fetch(`https://api-v2.themuse.com/jobs?api_key=${museKey}&page=${params.page}`)
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
      <p>jobs</p>
    );
  }
}

export default Muse;
