import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import {Login, add} from '../pages/login/Login.js'

test('Test Login', () => {
    const value = add(1,2)
    expect(value).toBe(3);
  });