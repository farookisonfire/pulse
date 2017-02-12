import React from 'react';
import { Link } from 'react-router';

class Total extends React.Component {
  render() {
    return(
      <div>
        <h1>Total Component</h1>
        <Link to="health">Health-Innovation</Link>
        <Link to="youth">Youth Empowerment</Link>
      </div>
    );
  }
}

export default Total;
