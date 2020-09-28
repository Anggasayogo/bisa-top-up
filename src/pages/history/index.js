import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { IcLogo } from '../../assets';
import {Gap, Headers} from '../../components'; 

const History = ({navigation}) => {
    return (
        <View style={styles.pages}>
            <Headers height={60} title="History" onPress={()=>{navigation.goBack()}}/>
            <Gap height={20}/>
            <ScrollView style={styles.container}>
                <View style={styles.histories}>
                    <Image source={IcLogo} style={styles.logo}/>
                    <View style={styles.content}>
                        <Text style={styles.title}>History</Text>
                        <Gap height={10}/>
                        <Text style={styles.textcontent}>Top up berhasil Rp 20.000 pada tgl 17 september 2020</Text>
                    </View>
                </View>
                <Gap height={10}/>
                <View style={styles.histories}>
                    <Image source={IcLogo} style={styles.logo}/>
                    <View style={styles.content}>
                        <Text style={styles.title}>History</Text>
                        <Gap height={10}/>
                        <Text style={styles.textcontent}>Top up berhasil Rp 20.000 pada tgl 17 september 2020</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default History

const styles = StyleSheet.create({
    textcontent:{
        fontSize: 12,
    },
    pages:{
        backgroundColor: "#F7F8FC",
        flex: 1,
    },
    container:{
        paddingHorizontal: 15,
    },
    content:{
        maxWidth: 250
    },
    histories:{
        backgroundColor: 'white',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "0 4 4 rgba(0, 0, 0, 0.10)",
        borderBottomWidth: 1,
        flexDirection: 'row',
        paddingVertical: 15
    },
    logo:{
        width: 50,
        height: 50,
        marginRight: 20,
        marginLeft: 5
    },
    title:{
        fontSize: 14,
        fontWeight: 'bold'
    }
})
