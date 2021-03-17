import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Button } from 'react-native-elements';

export default function IconButton(props) {
    return (
        <Button
            icon={
                <Ionicons name={props.icon} size={props.size} color={props.color} />
            }
            onPress={() => props.onclick()}
            type="clear"
        />
    )
}
