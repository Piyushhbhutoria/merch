import React from 'react';
import { View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { commonStyles } from '../styles/common';

export default class SignupScreen extends React.Component {

    state = {
        email: '',
        password: '',
    };

    render() {

        return (
            <View style={commonStyles.container}>
                <Input
                    placeholder='Email'
                    leftIcon={{ type: 'font-awesome', name: 'envelope-o' }}
                    onChangeText={value => this.setState({ email: value })}
                />
                <Input
                    placeholder='Password'
                    leftIcon={{ type: 'font-awesome', name: 'lock' }}
                    secureTextEntry={true}
                />
                <Button
                    title="Sign Up"
                    type="clear"
                />
                <Button
                    title="Log In"
                    type="clear"
                    onPress={() => this.props.navigation.navigate('Login')}
                />
            </View>
        );
    }
}
