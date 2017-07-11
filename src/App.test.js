/**
 * Jira / enzyme unit tests for simple issues
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

// Test that it renders the app
it('renders without crashing', () => {
  shallow(<App />);
});

// Test if it displays simple html
it('renders flat content', () => {
  const typicalContent = <h1>Sky Betting &amp; Gaming Technical Test</h1>;
  expect(shallow(<App />).contains(typicalContent)).toEqual(true);
});
