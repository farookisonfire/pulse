import {expect} from "chai";
import React from 'react';
import {shallow} from 'enzyme';
import Nav from './nav';

describe("<Nav />", () => {
  it("Should render Menu and MenuItems.", () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.find('Menu').length).to.equal(1);
    expect(wrapper.find('MenuItem').length).to.equal(4);
  });
});
