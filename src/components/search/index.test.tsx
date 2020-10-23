import React from 'react';
import renderer from 'react-test-renderer';
import Search from '.';

test('renders correctly', () => {
    const searchCmp = renderer.create(<Search navigation={null} />).toJSON();
    expect(searchCmp).toMatchSnapshot();
});