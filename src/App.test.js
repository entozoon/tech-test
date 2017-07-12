/**
 * Jira / enzyme unit tests for simple issues
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header/Header';
import People from './components/People/People';
import { shallow, mount } from 'enzyme';

// Test that it renders the app
it('Renders without crashing', () => {
  shallow(<App />);
});

// Test loading of a component
it('Renders header component', () => {
  const headerComponent = <Header />;
  expect(shallow(<App />).contains(headerComponent)).toEqual(true);
});

// Test if it displays simple html within it
it('Renders flat content', () => {
  const typicalContent = <h1>Sky Betting &amp; Gaming Technical Test</h1>;
  expect(shallow(<Header />).contains(typicalContent)).toEqual(true);
});

it('Component creates a state from given prop', () => {
  const testArray = [
    {
      firstname: 'Harry',
      lastname: 'Roberts'
    }
  ];

  const wrapper = mount(<People people={testArray} />);

  expect(wrapper.props().people).toEqual(testArray);
});
