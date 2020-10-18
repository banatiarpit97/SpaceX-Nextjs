import React from 'react';
import renderer from 'react-test-renderer';

import MissionCard from './../components/MissionCard';

it('renders correctly', () => {
  const tree = renderer.create(<MissionCard />).toJSON();
  expect(tree).toMatchSnapshot();
});