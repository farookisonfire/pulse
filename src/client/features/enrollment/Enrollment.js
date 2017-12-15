import React, { Component } from 'react';
import styled from 'styled-components';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import EnrollmentContent from './EnrollmentContent';
import Divider from 'material-ui/Divider';


const EnrollmentPage = styled.div`
  background-color: white;
  min-height: calc(100vh - 64px);
`;

const SectionTitle = styled.h2`
  margin: 0;
  margin-left: 16px;
  color: rgba(50,50,50,.75);
  padding: 32px 8px 24px 8px;
  font-weight: 200;
  font-size: 22px;
`;

class Enrollment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listOpenState: {
        healthInnovation: false,
        youthEmpowerment: false,
        education: false
      }
    };

    this.handleNestedListToggle = this.handleNestedListToggle.bind(this);
  }
  
  handleNestedListToggle(item) {
    const { open } = item.state;
    const { value = '' } = item.props;
    const newState = Object.assign({}, this.state.listOpenState, {[value]:open});
    console.log(newState, open, value)
    this.setState({listOpenState: newState});
  }

  render() {
    const {
      listOpenState
    } = this.state;

  console.log('listOpenState', this.state.listOpenState);
    return (
      <EnrollmentPage>
        <div>
          <SectionTitle>PROGRAM ENROLLMENT</SectionTitle>
          <Divider style={{marginLeft: 8, marginRight: 8}} />
          <EnrollmentContent
            handleListToggle={this.handleNestedListToggle}
            listOpenState={listOpenState} />
        </div>
      </EnrollmentPage>
    );
  }
}

export default Enrollment;
