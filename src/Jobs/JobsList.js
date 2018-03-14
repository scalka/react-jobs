import React from 'react';
import ReactDOM from 'react-dom';

class JobsList extends React.Component {
  constructor(props) {
    super(props);
    //the name of input must match state elemetns
    this.state = {
    };

  }
  render() {
    let data = this.props.data;
    console.log(this.props.data);
    /*const list = this.data.map( (job) => {
      return (
         <li key={job.id}>
            <p>{job.contents}</p>
          </li>
            )
    });*/

    return (
      <ul>

      </ul>
    );
  }
}


export default JobsList;
