import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';

import MyComponent from '../src/MyComponent';


describe('Simple', () => {

  before(() => {
    console.log('Hello testing')
  });

  after(() => {
    console.log('Tests finshed');
  });

  it('test <MyComponent /> success', () => {
    const wrapper = shallow(<MyComponent />);
    assert.equal(wrapper.find("div").length, 1);
    assert.equal(wrapper.find("#test").length, 1);
  });

  it('test <MyComponent /> success 2', () => {
    const wrapper = shallow(<MyComponent />);
    assert.equal(wrapper.find("div").length, 1);
    assert.equal(wrapper.find("#test").length, 1);
  });
});
