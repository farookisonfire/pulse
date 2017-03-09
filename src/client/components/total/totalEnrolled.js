import React from 'react';
import totalEnrolledChart from './totalEnrolledChart';
import {connect} from 'react-redux';

class TotalEnrolled extends React.Component{

  componentDidMount(){
    totalEnrolledChart();
  }

  render() {
    console.log(this.props.totalEnrolled);
    return (
      <div id="total-enrolled" style={{width:"100%", height:"500px"}}></div>
    );
  }
}

function mapStateToProps({totalEnrolled}) {
// let enrollmentByProgram = {};
//
// totalEnrolled.map(enrollee => {
//
// })

  return {
    totalEnrolled
  };
}

module.exports = connect(mapStateToProps)(TotalEnrolled);
