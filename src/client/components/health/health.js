import React from 'react';
import { Link } from 'react-router';

class Health extends React.Component {
  render() {
    return (
      <div>
        <h1>Health Innovation</h1>
        <Link to="/">Totals</Link>
        <Link to="youth">Youth Empowerment</Link>
      </div>
    );
  }
}

export default Health;
