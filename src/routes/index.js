import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Splash } from '../pages';

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash"options={{headerShown: false}} component={Splash}/>
            <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
    )
}

export default Routes

const styles = StyleSheet.create({})
