import React from 'react'
import { StyleSheet,Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Buttons = ({title,onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Buttons

const styles = StyleSheet.create({
    container:{
        paddingVertical: 10,
        borderRadius: 30,
        height: 50,
        borderWidth: 1,
        borderColor: "0 4 4 rgba(0, 0, 0, 0.25)",
        backgroundColor: "#33C5FF",
    },
    title:{
        color: 'white',
        textAlign: 'center',
        fontSize: 18
    }
})
