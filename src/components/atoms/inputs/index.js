import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const Inputs = ({label}) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input}/>
        </View>
    )
}

export default Inputs

const styles = StyleSheet.create({
    input:{
        borderWidth: 1,
        borderColor: "0 4 4 rgba(0, 0, 0, 0.15)",
        borderBottomWidth: 3,
        borderRadius: 25,
        padding: 12,
        height: 50,
        backgroundColor: 'white'
    },
    label:{
        fontSize: 16,
        color: "black",
        marginBottom: 6,
    }
})
