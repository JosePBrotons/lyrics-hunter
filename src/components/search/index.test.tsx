import React from 'react';
import renderer from 'react-test-renderer';
import Search from '.';

test('Renders search component correctly', () => {
    const searchCmp = renderer.create(<Search navigation={null} />).toJSON();
    expect(searchCmp).toMatchSnapshot();
});
