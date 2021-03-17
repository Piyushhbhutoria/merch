import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import CartScreen from './../screens/CartScreen';
import CustomScreen from './../screens/CustomScreen';
import HomeScreen from './../screens/HomeScreen';
import ProfileScreen from './../screens/ProfileScreen';

const HomeStack = createStackNavigator();
const CustomStack = createStackNavigator();
const CartStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const brand = "Merch"

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name={brand}
                component={HomeScreen}
                options={{ headerLeft: null }}
            />
        </HomeStack.Navigator>
    );
}

function CustomStackScreen() {
    return (
        <CustomStack.Navigator>
            <CustomStack.Screen
                name={brand}
                component={CustomScreen}
            />
        </CustomStack.Navigator>
    );
}

function CartStackScreen() {
    return (
        <CartStack.Navigator>
            <CartStack.Screen
                name={brand}
                component={CartScreen}
            />
        </CartStack.Navigator>
    );
}

function ProfileStackScreen() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name={brand}
                component={ProfileScreen}
            />
        </ProfileStack.Navigator>
    );
}

export {
    HomeStackScreen,
    CustomStackScreen,
    CartStackScreen,
    ProfileStackScreen,
};

