import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import AddToCart from './Buttons/AddToCart';

const { width } = Dimensions.get('window');

export default function Card(props) {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.imageStyle} source={props.image} />
                </View>
                <Text style={styles.categoryStyle}>{props.category}</Text>
                <Text style={styles.titleStyle}>{props.title}</Text>
                <Text style={styles.priceStyle}>{props.price}</Text>
                <AddToCart />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width * 0.42,
        margin: 10,
        padding: 20,
        borderRadius: 15,
        flex: 1,
    },
    categoryStyle: {
        fontSize: 12,
        paddingVertical: 10,
        color: 'grey',
    },
    titleStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    priceStyle: {
        fontSize: 14,
        paddingBottom: 10,
        color: 'gray',
    },
    imageStyle: {
        resizeMode: 'contain',
        height: '100%',
        width: '100%',
    },
    imageContainer: {
        width: '100%',
        height: 150,
    }
});

