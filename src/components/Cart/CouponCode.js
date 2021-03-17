import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { commonStyles } from './../../styles/common';

const { width } = Dimensions.get('window');

export default function CouponCode(props) {
    const [value, setValue] = React.useState('');
    return (
        <View style={styles.container}>
            <View style={commonStyles.headingTextView}>
                <Text style={commonStyles.headingText}>Coupon Code</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={{ width: width * 0.7 }}>
                    <Input
                        placeholder="COUPON CODE"
                        value={value}
                        onChangeText={value => setValue(value)}
                    />
                </View>
                <View>
                    <Button
                        onPress={() => console.log('click')}
                        type="outline"
                        title="Apply"
                    />
                </View>
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
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.9,
    }
});
