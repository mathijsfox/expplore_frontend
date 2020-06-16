import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Login from '../pages/login/Login';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('Login testlogin with true',()=>{
  const login = mount(<Login></Login>)
  login.setState({
    name: 'test'
  })
  expect(login.state.name).toEqual('test');
})