import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const { width } = Dimensions.get('window');

export default function Browse(props) {
    return (
        <Button
            title="BROWSE"
            onPress={() => props.onclick()}
            containerStyle={styles.button}
            titleStyle={styles.buttonText}
            type="clear"
        />
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "white",
        padding: 7,
        borderRadius: 35,
        paddingHorizontal: width * 0.1,
    },
    buttonText: {
        fontSize: 14,
        color: 'tomato',
    },
});
