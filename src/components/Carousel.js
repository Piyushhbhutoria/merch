import { RNCarousel } from '@imidiotic/react-native-carousel-cards';
import React from 'react';

export default function Carousel(props) {
    return (
        <RNCarousel
            data={props.data}
        />
    )
};
