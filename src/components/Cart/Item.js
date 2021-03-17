import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import IconButton from '../Buttons/IconButton';

const { width } = Dimensions.get('window');

export default function Item(props) {
    const size = 16
    const color = 'tomato'
    const [quantity, setQuantity] = useState(props.quantity)
    return (
        <View style={[styles.container]}>
            <View style={styles.imageContent}>
                <Image style={styles.imageStyle} source={props.image} />
            </View>
            <View style={styles.content}>
                <Text style={styles.titleStyle}>{props.title}</Text>
                <Text style={styles.priceStyle}>{props.price}</Text>
            </View>
            <View style={styles.quantity}>
                <IconButton
                    icon={"remove-outline"}
                    size={size}
                    color={color}
                    onclick={() => quantity - 1 >= 1 ? setQuantity(quantity - 1) : setQuantity(1)}
                />
                <Text style={styles.quantityStyle}>{quantity}</Text>
                <IconButton
                    icon={"add-outline"}
                    size={size}
                    color={color}
                    onclick={() => setQuantity(quantity + 1)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 130,
        width: width * 0.9,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderTopWidth: 0.5,
    },
    imageContent: {
        flex: 1,
        alignItems: 'center',
        width: '35%',
        alignSelf: 'center'
    },
    content: {
        flex: 1,
        alignItems: 'flex-start',
        width: '35%',
    },
    quantity: {
        flex: 1,
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        width: '30%',
    },
    titleStyle: {
        fontSize: 16,
        paddingVertical: 20,
        fontWeight: 'bold',
    },
    imageStyle: {
        resizeMode: 'contain',
        height: '90%',
        width: '90%'
    },
    priceStyle: {
        fontSize: 14,
        paddingBottom: 10,
        color: 'gray',
    },
    quantityStyle: {
        fontSize: 18,
        paddingHorizontal: 10,
    },
});
