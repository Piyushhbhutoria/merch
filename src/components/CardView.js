import React from 'react';
import { StyleSheet, View } from 'react-native';
import Card from './Card';

export default function CardView(props) {
    return (
        <View style={styles.container}>
            {props.data.map((item, index) => {
                return <Card key={index} image={item.imgurl} title={item.title} color={item.color} />
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
});

