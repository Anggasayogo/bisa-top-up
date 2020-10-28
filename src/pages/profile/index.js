import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Duser, ICProfchange, ICRating, IcTransfer } from '../../assets';
import { Gap, Vlist } from '../../components';

function Profile(){
    return(
        <View style={styles.pages}>
          <View style={styles.wraper}>
            <Gap height={70}/>
            <View style={styles.container}>
                <TouchableOpacity>
                    <Image source={Duser} style={styles.profile}/>
                </TouchableOpacity>
                <View style={styles.profilename}>
                    <Text style={styles.username}>Sayna Melinda</Text>
                    <Text style={styles.welcome}>Welcome Back !</Text>
                </View>
            </View>
            <Gap height={100}/>
            <Vlist icgambar={ICProfchange} title="Edit Profile" desc="updating profile for your information"/>
            <Gap height={35}/>
            <Vlist icgambar={ICRating} title="Give Us Rate" desc="Give rate on playstore & macapp store"/>
            <Gap height={35}/>
            <Vlist icgambar={IcTransfer} title="Log Out" desc="logout for destroying your sessions"/>
            <Gap height={35}/>
          </View>
        </View>
    )
}

export default Profile;


const styles = StyleSheet.create({
    wraper:{flex: 1 ,padding: 15, backgroundColor: 'white',borderBottomLeftRadius: 30, borderBottomRightRadius: 30},
    pages:{
        backgroundColor: '#33C5FF',
        flex: 1
    },
    profile:{
        height: 75,
        width: 75,
        borderRadius: 80 /2,
        borderColor: '#E5E5E5',
        borderWidth: 5
    },
    profilename:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 30
    },
    container:{
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    username:{
        fontSize: 18,
        fontWeight: 'normal'
    },
    welcome:{
        fontSize: 12,
        fontWeight: 'normal'
    }
})
