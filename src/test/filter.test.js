import React from 'react';
import renderer from 'react-test-renderer';

import Filter from './../components/Filter';

it('renders correctly', () => {
  const tree = renderer.create(<Filter />).toJSON();
  expect(tree).toMatchSnapshot();
});