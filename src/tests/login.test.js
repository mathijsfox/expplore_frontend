import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import Login from '../pages/login/Login'
import { Simulate } from 'react-dom/test-utils';
import { shallow } from 'enzyme';


describe('Test Login component', () => {
    it('Test click event', () => {
      const mockCallBack = jest.fn();
  
      const button = shallow((<input onClick={mockCallBack}>Ok!</input>));
      button.find('buttonSubmit').simulate('click');
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
  });