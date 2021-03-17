import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { commonStyles } from '../../styles/common';

const { width } = Dimensions.get('window');

export default function Total(props) {
    return (
        <View style={styles.container}>
            <View style={commonStyles.headingTextView}>
                <Text style={commonStyles.headingText}>Bill Details</Text>
            </View>
            <View style={styles.row}>
                <Text>Items Total:</Text>
                <Text>1000</Text>
            </View>
            <View style={styles.row}>
                <Text>Discount:</Text>
                <Text>1000</Text>
            </View>
            <View style={styles.row}>
                <Text>Delivery:</Text>
                <Text>1000</Text>
            </View>
            <View style={styles.row}>
                <Text>Total To Pay:</Text>
                <Text>1000</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width * 0.9,
        alignItems: 'center',
        flex: 1,
        padding: 10,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.9,
    }
});
