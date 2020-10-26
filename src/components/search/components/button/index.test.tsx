import React from 'react';
import renderer from 'react-test-renderer';
import Button from '.';

test('renders button component correctly', () => {
    const props = {
        text: 'Search',
        disabled: false,
    };
    const btnCmp = renderer.create(<Button {...props} />).toJSON();
    expect(btnCmp).toMatchSnapshot();
});
