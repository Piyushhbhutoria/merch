import React from 'react';
import { Text, View } from 'react-native';
import { commonStyles } from '../styles/common';

export default function CustomScreen({ navigation }) {
    return (
        <View style={commonStyles.container}>
            <Text>CustomScreen</Text>
        </View>
    );
}
