import React, { Component } from 'react';
import './App.css';
import JobsList from './Jobs/JobsList';
const querystring = require('querystring');

class Muse extends Component {
  constructor(props) {
		super(props);
		this.state = {
/*      company: '',
      category: 'Data Science',
      page: 0,
      level: '',
      location: '',
      data: ''*/
		};
		// This binding is necessary to make `this` work in the onclick callback
		// this.handleClick = this.handleClick.bind(this);
	}
  componentWillMount() {
    let config = require('./config.json');
    let museKey = config.museKey;
    let parameters = [];
    console.log(this.props.data);
    for(let param in this.props) {
      if(`${this.state[param]}`) {
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

      this.setState( {
        data: data.results
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <p>SOmething</p>
        <JobsList data={this.state.data} />
      </div>
    );
  }
}

export default Muse;
