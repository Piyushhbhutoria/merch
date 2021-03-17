import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const { width } = Dimensions.get('window');

export default function AddToCart(props) {
    return (
        <Button
            title="ADD TO CART"
            onPress={() => props.onclick()}
            containerStyle={styles.button}
            titleStyle={styles.buttonText}
            type="clear"
        />
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "tomato",
        padding: 8,
        borderRadius: 35,
    },
    buttonText: {
        fontSize: 12,
        color: 'white',
        fontWeight: 'bold',
    },
});
