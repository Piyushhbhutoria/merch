import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import CardView from '../components/CardView';
import Carousel from '../components/Carousel';
import FeatureCardView from '../components/FeatureCardView';
import { commonStyles } from '../styles/common';

export default function HomeScreen({ navigation }) {
    return (
        <View style={commonStyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Carousel data={bannerdata} />
                <CardView data={cardsdata} />
                <View style={commonStyles.headingTextView}>
                    <Text style={commonStyles.headingText}>Featured Products</Text>
                </View>
                <FeatureCardView data={featurecardsdata} />
            </ScrollView>
        </View>
    );
}

const bannerdata = [
    { "url": require('./../../assets/images/bottle.png') },
    { "url": require('./../../assets/images/mugs.png') },
    { "url": require('./../../assets/images/popsockets-banner.png') },
]

const cardsdata = [
    {
        "imgurl": require('./../../assets/images/popsockets.png'),
        "title": "Popsockets",
        "color": "tomato",
    },
    {
        "imgurl": require('./../../assets/images/bluetooth-speakers.png'),
        "title": "Bluetooth Speakers",
        "color": "skyblue",
    },
    {
        "imgurl": require('./../../assets/images/mouse-pads.png'),
        "title": "Mouse Pads",
        "color": "seagreen",
    },
]

const featurecardsdata = [
    {
        "imgurl": require('./../../assets/images/birthday-note.png'),
        "title": "Birthday Note",
        "category": "personalised gift",
        "price": "200",
    },
    {
        "imgurl": require('./../../assets/images/golden-rose.jpg'),
        "title": "Golden Rose",
        "category": "personalised gift",
        "price": "200",
    },
    {
        "imgurl": require('./../../assets/images/heart-led-frame.jpg'),
        "title": "Heart Led Frame",
        "category": "personalised gift",
        "price": "200",
    },
    {
        "imgurl": require('./../../assets/images/sipper-bottle.jpeg'),
        "title": "Sipper Bottle",
        "category": "sipper bottles",
        "price": "200",
    },
]
