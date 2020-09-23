import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IcHome,IcProfile,IcScan } from '../../../assets'

const Tabitem = ({title,onPress,onLongPress}) => {
    const Icon = ()=>{
        if(title == 'Home'){
            return <Image style={styles.image} source={IcHome} />
        }
        if(title == 'Pay'){
            return <Image style={styles.image} source={IcScan} />
        }
        if(title == 'Profile'){
            return <Image style={styles.image} source={IcProfile} />
        }

        return <Image style={styles.image} source={IcHome} />
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon/>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Tabitem

const styles = StyleSheet.create({
    image :{
        width: 35,
        height: 35
    },
    container:{
        alignItems: 'center'
    },
    text:{
        color: 'white'
    }
})
