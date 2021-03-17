// keep react-native-gesture-handler line 1
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CartStackScreen, CustomStackScreen, HomeStackScreen, ProfileStackScreen } from './src/navigation/TabNavigation';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (route.name === 'Custom') {
        iconName = focused ? 'create' : 'create-outline';
      } else if (route.name === 'Cart') {
        iconName = focused ? 'cart' : 'cart-outline';
      } else if (route.name === 'Profile') {
        iconName = focused ? 'person' : 'person-outline';
      }
      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  })}
  tabBarOptions={{
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  }}
>
  <Tab.Screen name="Home" component={HomeStackScreen} />
  <Tab.Screen name="Custom" component={CustomStackScreen} />
  <Tab.Screen name="Cart" component={CartStackScreen} />
  <Tab.Screen name="Profile" component={ProfileStackScreen} />

</Tab.Navigator>

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    isSignedIn: false,
  };

  render() {
    const { isLoadingComplete } = this.state;
    if (!isLoadingComplete) {
      // todo: add loading screen
    }
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
