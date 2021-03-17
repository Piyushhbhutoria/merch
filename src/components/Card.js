import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Browse from './Buttons/Browse';

const { width } = Dimensions.get('window');

export default function Card(props) {
    return (
        <View style={[styles.container, { backgroundColor: props.color }]}>
            <View style={styles.content}>
                <Text style={styles.titleStyle}>{props.title}</Text>
                <Browse />
            </View>
            <View style={styles.content}>
                <Image style={styles.imageStyle} source={props.image} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: width * 0.9,
        alignItems: 'center',
        margin: 15,
        borderRadius: 15,
        flex: 1,
        flexDirection: 'row',
        padding: 10,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        width: '50%',
        alignSelf: 'center'
    },
    titleStyle: {
        fontSize: 21,
        paddingVertical: 30,
        color: 'white',
        fontWeight: 'bold',
    },
    imageStyle: {
        resizeMode: 'contain',
        height: '100%',
        width: '100%'
    },
});

