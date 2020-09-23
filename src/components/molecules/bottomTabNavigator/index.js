import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import Tabitem from '../tabItem';

const BottomTabNavigator = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.container}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;
    
            const isFocused = state.index === index;
    
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });
    
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };
    
            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };
    
            return (
                <Tabitem title={label} onLongPress={onLongPress} onPress={onPress} key={index}/>
            );
          })}
        </View>
    );
}

export default BottomTabNavigator

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: "#33C5FF",
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical: 7
    }
})
