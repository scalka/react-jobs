/* React Example - UserCard used in the UserProfileList Demo

USING PROPTYPES - https://reactjs.org/docs/typechecking-with-proptypes.html

Styled using Bulma (https://bulma.io).

- AE 12/02/18
*/

import React from 'react';
import PropTypes from 'prop-types';

class JobCard extends React.Component {
  render() {
    console.log('jobcard');
    return (
      <div className="column is-3">
        <div className="card" >
          <div className="card-image">
            <figure className="image is-4by3">
              <img alt='Profile' src={this.props.image}></img>
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{this.props.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Specifies the default values for props:
JobCard.defaultProps = {
  name: 'randomuser',
  image: 'http://via.placeholder.com/400x400',
  nat: ''
};

// Checks that the correct type of props are supplied:
JobCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  nat: PropTypes.string
};

export default JobCard;
