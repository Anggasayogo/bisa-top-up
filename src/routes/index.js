import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomTabNavigator } from '../components';
import { Example, Home, Login, Profile, Qrscan, Register, Splash } from '../pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () =>{
    return(
        <Tab.Navigator tabBar={props => <BottomTabNavigator {...props} />}>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Pay" component={Qrscan}/>
            <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>
    )
}

const Routes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
            <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}}/>
            <Stack.Screen name="Example" component={Example} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default Routes

const styles = StyleSheet.create({})
