import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IcNext } from '../../../assets'
import { Gap } from '../../atoms'

const Vlist = ({icgambar,title,desc}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View >
                <Image source={icgambar} style={styles.icon}/>
            </View>
            <View style={styles.desc}>
                <Text style={styles.title}>{title}</Text>
                <Gap height={5}/>
                <Text style={styles.destitle}>{desc}</Text>
            </View>
            <View>
                <Image source={IcNext} style={styles.next}/>
            </View>
        </TouchableOpacity>
    )
}

export default Vlist

const styles = StyleSheet.create({
    next:{width: 16,height: 16},
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon:{
        width: 25,
        height: 25
    },
    title:{
        fontSize: 15
    },
    destitle : {
        fontSize: 11,
    },
    desc:{
        paddingRight: 89
    }
})
