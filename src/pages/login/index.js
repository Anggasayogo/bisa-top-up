import React from 'react'
import { Image, StyleSheet, Text } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { IcLogo } from '../../assets'
import { Buttons, Gap, Inputs } from '../../components'

const Login = ({navigation}) => {
    return (
        <ScrollView style={styles.pages}>
            <Gap height={60}/>
            <Image source={IcLogo} style={styles.logo} />
            <Gap height={40}/>
            <Text style={styles.title}>Login</Text>
            <Gap height={25}/>
            <Inputs label="Email"/>
            <Gap height={15}/>
            <Inputs label="Password"/>
            <Gap height={30}/>
            <Buttons title="Login" onPress={()=>{navigation.navigate('MainApp')}}/>
            <Gap height={30}/>
            <TouchableOpacity onPress={()=>{navigation.navigate('Register')}} style={styles.opinion}>
               <Text>Register  disini jika kamu belum mempunyai akuan</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    pages:{
        flex: 1,
        padding: 15,
        backgroundColor: "#F7F8FC",
        flex: 1,
    },
    title: {
        color: "#33C5FF",
        textAlign: 'center',
        fontSize: 24
    },
    logo:{
        width: 60,
        height: 53,
    },
    opinion:{
        maxWidth: 200
    }
})
