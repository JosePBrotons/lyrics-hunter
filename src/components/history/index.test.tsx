import React from 'react';
import renderer from 'react-test-renderer';
import History from '.';

test('Renders history component correctly', () => {
    const props = {
        navigation: null
    };
    const historyCmp = renderer.create(<History {...props} />).toJSON();
    expect(historyCmp).toMatchSnapshot();
});