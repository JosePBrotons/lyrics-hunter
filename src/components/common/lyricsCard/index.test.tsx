import React from 'react';
import renderer from 'react-test-renderer';
import LyricsCard from '.';

test('renders lyrics card component correctly', () => {
    const props = {
        artist: 'Coldplay',
        lyrics: 'I used to rule the world Seas would rise when I gave the word',
        song: 'Viva La Vida',
        onPress: jest.fn
    };
    const lyricsCardCmp = renderer.create(<LyricsCard {...props} />).toJSON();
    expect(lyricsCardCmp).toMatchSnapshot();
});