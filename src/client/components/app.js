import React from 'react';
import Nav from './nav';
import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return(
      <div>
        <Nav />
        {this.props.logged_in && this.props.children}
      </div>
    );
  }
}

const mapStateToProps = ({auth}) => {
  const { logged_in } = auth;
  return {
    logged_in
  };
};

export default connect(mapStateToProps)(App);
