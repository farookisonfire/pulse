import {expect} from "chai";
import React from 'react';
import {shallow} from 'enzyme';
import Total from './Total';

describe("<Total />", () => {
  it("Should render a Card and Cardtitle.", () => {
    const wrapper = shallow(<Total />);
    expect(wrapper.find('Card').length).to.equal(1);
    expect(wrapper.find('CardTitle').length).to.equal(1);
  });
});
