import * as React from 'react'
import { StyleSheet, Text, View,Image, StatusBar } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Slider from 'react-native-hook-image-slider'
import { IcHistory, IcHome, IcTopup, IcTransfer,IcBell, Pln, Pulsa, PaketData, Kesehatan, Pdam, Tvcable, Asuransi, Lainyah, BgTop, Game, Wifi, TiketBioskop, TiketPesawat, RentalMobil } from '../../assets'
import { Gap } from '../../components'
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

const Home = ({navigation}) => {
    const renderContent = () => (
        <View
          style={{
            backgroundColor: "#F7F8FC",
            padding: 16,
            height: 450,
          }}
        >
          <Text style={{textAlign: 'center'}}>Swipe down to close</Text>
          <View style={styles.mainmenu}>
                   <View style={styles.childmainmenu}>
                        <TouchableOpacity style={styles.logoextramenus}>
                            <Image style={styles.logoextramain} source={Game} />
                            <Text style={styles.mainame}>Top Up Game</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.logoextramenus}>
                            <Image style={styles.logoextramain} source={Wifi} />
                            <Text style={styles.mainame}>Bayar Internet</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.logoextramenus}>
                            <Image style={styles.logoextramain} source={TiketBioskop} />
                            <Text style={styles.mainame}>Ticket Bioskop</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.logoextramenus}>
                            <Image style={styles.logoextramain} source={TiketPesawat} />
                            <Text style={styles.mainame}>Ticket Peswat</Text>
                        </TouchableOpacity>
                   </View>
                   <Gap height={15}/>
                   <View style={styles.childmainmenu}>
                        <TouchableOpacity style={styles.logoextramenus}>
                            <Image style={styles.logoextramain} source={RentalMobil} />
                            <Text style={styles.mainame}>Rental Mobil</Text>
                        </TouchableOpacity>
                   </View>
                </View>
        </View>
    );
    
    const sheetRef = React.useRef(null);

    return (
        <>
        <StatusBar backgroundColor="#33C5FF"/>
        <View style={styles.pages}>
            <View style={styles.container}>
                <View style={styles.infosaldo}>
                    <View>
                        <Text style={styles.semboyan}>BISA TOP UP</Text>
                        <Text style={styles.sldo}>Saldo :</Text>
                        <Text style={styles.rp}>Rp</Text>
                        <Text style={styles.nominal}>300.000</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={BgTop} style={{width: 117,height: 126}}/>
                        <Image style={{width: 28,height: 30,marginTop: 17}} source={IcBell} />
                    </View>
                </View>
                <View style={styles.main}>
                    <TouchableOpacity>
                        <Image style={styles.logomain} source={IcTopup} />
                        <Text style={styles.mainame}>Top Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.logomain} source={IcTransfer} />
                        <Text style={styles.mainame}>Transfer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.logomain} source={IcHistory} />
                        <Text style={styles.mainame}>History</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.mainmenu}>
                   <View style={styles.childmainmenu}>
                        <TouchableOpacity style={styles.logoextramenus}>
                            <Image style={styles.logoextramain} source={Pln} />
                            <Text style={styles.mainame}>Listrik</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.logoextramenus}>
                            <Image style={styles.logoextramain} source={Pulsa} />
                            <Text style={styles.mainame}>Isi Pulsa</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.logoextramenus}>
                            <Image style={styles.logoextramain} source={PaketData} />
                            <Text style={styles.mainame}>Data</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.logoextramenus}>
                            <Image style={styles.logoextramain} source={Kesehatan} />
                            <Text style={styles.mainame}>Doctor</Text>
                        </TouchableOpacity>
                   </View>
                   <Gap height={10}/>
                   <View style={styles.childmainmenu}>
                        <TouchableOpacity style={styles.logoextramenus}>
                            <Image style={styles.logoextramain} source={Pdam} />
                            <Text style={styles.mainame}>PDAM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.logoextramenus}>
                            <Image style={styles.logoextramain} source={Tvcable} />
                            <Text style={styles.mainame}>TVcable</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.logoextramenus}>
                            <Image style={styles.logoextramain} source={Asuransi} />
                            <Text style={styles.mainame}>Asurnsi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.logoextramenus} onPress={() => sheetRef.current.snapTo(0)}>
                            <Image style={styles.logoextramain} source={Lainyah} />
                            <Text style={styles.mainame}>Lainyah</Text>
                        </TouchableOpacity>
                   </View>
                </View>
                <Text style={{paddingHorizontal: 15,fontSize: 12,fontWeight: 'bold'}}>Info Dan Promosi Special</Text>
                <Gap height={10}/>
                <View style={{paddingHorizontal: 15}}>
                <Slider imageHeight={150} loadingIndicatorColour="#33C5FF" activeDotColor="#33C5FF" images={[
                    "https://cdn2.tstatic.net/tribunnews/foto/bank/images/provider-byu.jpg",
                    "https://gadgetren.com/wp-content/uploads/2020/01/Switch-Beta-Smartfren-Header.jpg"
                ]}/>
                <Gap height={10}/>
                </View>
                </ScrollView>
            </View>
        </View>
        <BottomSheet ref={sheetRef} snapPoints={[450, 300, 0]} borderRadius={30} renderContent={renderContent}/>
        </>
    )
}

export default Home

const styles = StyleSheet.create({
    nominal : {fontSize: 14,color: 'white',marginLeft: 10,fontWeight: 'bold'},
    rp:{fontSize: 12,color: 'white'},
    sldo:{fontSize: 10,color: 'white'},
    semboyan:{fontSize: 18,fontWeight: 'bold',color: 'white'},
    pages:{
        backgroundColor: "#33C5FF",
        flex: 1,
    },
    container:{
        flex: 1,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: "#F7F8FC"
    },
    infosaldo:{
        backgroundColor: "#33C5FF",
        height: 220,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 25
    },
    main:{
        marginHorizontal: 15,
        height: 120,
        backgroundColor: "white",
        marginTop: -70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal:36
    },
    mainmenu:{
        marginHorizontal: 15,
        marginVertical: 10,
        backgroundColor: "white",
        padding: 20
    },
    logomain:{
        width: 35,
        height: 35,
    },
    mainame:{
        textAlign: 'center',
        marginTop: 10
    },
    logoextramain:{
        width: 29,
        height: 28
    },
    logoextramenus: {width: 50,height: 70,alignItems : 'center'},
    childmainmenu: {justifyContent: 'space-between',flexDirection: 'row'},
})
