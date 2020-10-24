import React from 'react';
import renderer from 'react-test-renderer';
import Input from '.';
import { COLORS } from '../../../../constants';

test('renders input component correctly', () => {
    const props = {
        placeholder: 'Artist',
        value: 'Coldplay',
        placeholderTextColor: COLORS.lightGray,
        onChangeText: jest.fn,
        iconName: 'user'
    };
    const inputCmp = renderer.create(<Input {...props} />).toJSON();
    expect(inputCmp).toMatchSnapshot();
});