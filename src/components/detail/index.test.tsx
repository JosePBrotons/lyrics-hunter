import React from 'react';
import renderer from 'react-test-renderer';
import Detail from '.';
import { IDetailProps } from './interface';

const props: IDetailProps = {
    navigation: { setOptions: jest.fn },
    route: {
        params: {
            artist: 'Coldplay',
            song: 'Viva La Vida',
            lyrics: 'I used to rule the world...',
        },
    },
};

test('renders correctly', () => {
    const searchCmp = renderer.create(<Detail {...props} />).toJSON();
    expect(searchCmp).toMatchSnapshot();
});
