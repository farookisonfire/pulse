import React from 'react';
import {shallow} from 'enzyme';
import AcceptedTable from './AcceptedTable';

describe('<AcceptedTable />', () => {
  it('should render Table, TableHeader, TableRow, TableBody', () => {
    const props = {
      tableHeaders: ["headerOne", "headerTwo"],
      acceptedApplicants: [
        {name: "", email: "", phone: "", dob: "", gender: "", university: "", program: "", why: ""},
        {name: "", email: "", phone: "", dob: "", gender: "", university: "", program: "", why: ""} ]
    };
    
    const wrapper = shallow(<AcceptedTable {...props}/>);
      expect(wrapper.find("Table").length).toBe(1);
      expect(wrapper.find("TableHeader").length).toBe(1);
      expect(wrapper.find("TableRow").length).toBe(3);
      expect(wrapper.find("TableBody").length).toBe(1);
  });
});
