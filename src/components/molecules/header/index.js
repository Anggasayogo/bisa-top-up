import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IcKembali } from '../../../assets'

const Headers = ({height,title,onPress}) => {
    return (
        <View style={styles.container(height)}>
            <TouchableOpacity onPress={onPress}>
                <Image source={IcKembali} style={styles.icBack}/>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Headers

const styles = StyleSheet.create({
    container: (height)=>({
        backgroundColor: "#33C5FF",
        height: height,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 15,
    }),
    title:{
        textAlign: 'center',
        flex: 1,
        color: 'white',
        fontSize: 14,
        fontWeight : 'bold',
        marginRight: 20
    },
    icBack:{
        width: 25,
        height: 25
    }
})
