import React from 'react';
import { ScrollView, View } from 'react-native';
import CartItem from '../components/Cart/Item';
import CartTotal from '../components/Cart/Total';
import CouponCode from '../components/Cart/CouponCode';
import { commonStyles } from './../styles/common';


export default function CartScreen({ navigation }) {
    return (
        <View style={commonStyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {cartdata.map((item, index) => {
                    return <CartItem
                        key={index}
                        image={item.imgurl}
                        title={item.title}
                        price={item.price}
                        quantity={item.quantity}
                    />
                })}
                <CouponCode />
                <CartTotal />
            </ScrollView>
        </View>
    );
}

const cartdata = [
    {
        "imgurl": require('./../../assets/images/birthday-note.png'),
        "title": "Birthday Note",
        "category": "personalised gift",
        "price": "200",
        "quantity": 1,
    },
    {
        "imgurl": require('./../../assets/images/golden-rose.jpg'),
        "title": "Golden Rose",
        "category": "personalised gift",
        "price": "200",
        "quantity": 1,
    },
    {
        "imgurl": require('./../../assets/images/heart-led-frame.jpg'),
        "title": "Heart Led Frame",
        "category": "personalised gift",
        "price": "200",
        "quantity": 1,
    },
    {
        "imgurl": require('./../../assets/images/sipper-bottle.jpeg'),
        "title": "Sipper Bottle",
        "category": "sipper bottles",
        "price": "200",
        "quantity": 1,
    },
]
