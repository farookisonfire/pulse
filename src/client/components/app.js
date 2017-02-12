import React from 'react';

class App extends React.Component {
  render() {
    return(
      <div>
        <h4>Header goes here</h4>
        {this.props.children}
      </div>
    );
  }
}

export default App;
