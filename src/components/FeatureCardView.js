import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import FeatureCard from './FeatureCard';

const { width } = Dimensions.get('window');

export default function FeatureCardView(props) {
    return (
        <View style={styles.container}>
            {props.data.map((item, index) =>
                <FeatureCard
                    key={index}
                    image={item.imgurl}
                    title={item.title}
                    category={item.category}
                    price={item.price}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        flexBasis: 2,
    },
});

