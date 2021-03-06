import React from 'react';
import { render, cleanup } from 'react-testing-library';

import App from './app';

describe('App', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />);
    //ToDo https://www.npmjs.com/package/enzyme
    setTimeout(() => {
      expect(getByText('Welcome to reactapp!!!')).toBeTruthy();
    })
  });
});
