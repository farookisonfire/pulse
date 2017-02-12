import React from 'react';
import { Link } from 'react-router';

class Youth extends React.Component {
  render() {
    return (
      <div>
        <h1>Youth Empowerment</h1>
        <Link to="/">Totals</Link>
        <Link to="health">Health-Innovation</Link>
      </div>
    );
  }
}

export default Youth;
