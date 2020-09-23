import React, { useEffect } from 'react'
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import {IcLogo} from '../../assets';
import {Gap}from '../../components';

const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace("Login")
        },3000)
    },[])
    return (
        <>
            <StatusBar backgroundColor="#33C5FF"/>
            <View style={styles.page}>
                <Image source={IcLogo} style={styles.logo}/>
                <Gap height={20}/>
                <Text style={styles.title}>BISA TOP UP</Text>
            </View>
        </>
    )
}

export default Splash

const styles = StyleSheet.create({
    page:{
        flex: 1,
        backgroundColor: "#33C5FF",
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        color: 'white',
        fontSize: 18,
    },
    logo:{
        width: 51,
        height: 48
    }
})
