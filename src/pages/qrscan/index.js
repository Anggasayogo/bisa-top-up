'use strict';

import React, { Component } from 'react';
import {
  Linking, StyleSheet,
  Text,


  View
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';



class Qrscan extends Component {
  onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err)
    );
  };

  render() {
    return (
      <View style={styles.pages}>
        <View style={styles.container}>
          <QRCodeScanner
            onRead={this.onSuccess}
            showMarker={true}
            reactivate={true}
            topContent={
            <Text style={styles.centerText}>Find Qr/Barcode </Text>
          }/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages:{
    flex: 1,
    backgroundColor: '#33C5FF'
  },
  container:{
    flex: 1,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: 'white'
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});

export default Qrscan