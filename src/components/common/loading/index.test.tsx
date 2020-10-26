import React from 'react';
import renderer from 'react-test-renderer';
import Loading from '.';

test('Renders loading component correctly', () => {
    const loadingCmp = renderer.create(<Loading />).toJSON();
    expect(loadingCmp).toMatchSnapshot();
});
