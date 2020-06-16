import React from 'react';
import Enzyme,{ shallow, render, mount ,dive} from 'enzyme';
import Login  from '../pages/login/Login';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
let component;

Enzyme.configure({ adapter: new Adapter() });

beforeAll(()=>{
  mount(<App></App>)
  
})

it('Login testlogin with true',()=>{
  
  const login = shallow(
    <BrowserRouter>
      <Login/>
    </BrowserRouter>
  );

  login.setState({email:'test'})
  expect(login.state.email).toEqual('test');
  
})