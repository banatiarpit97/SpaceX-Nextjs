import React from 'react';
import renderer from 'react-test-renderer';

import FilterItem from './../components/FilterItem';

it('renders correctly', () => {
  const tree = renderer.create(<FilterItem />).toJSON();
  expect(tree).toMatchSnapshot();
});