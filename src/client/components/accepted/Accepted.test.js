import React from 'react';
import {shallow} from 'enzyme';
import {Accepted} from './Accepted';

describe('<Accepted />', () => {
  it('should render a div', () => {
    const wrapper = shallow(<Accepted />);
    expect(wrapper.find("div").length).toBe(1)
    expect(wrapper.find("AcceptedTable").length).toBe(1)
  })
});