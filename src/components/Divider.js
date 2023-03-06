import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Divider = () => {
  return (
    <View
    style={styles.divider}></View>
  )
}

export default Divider

const styles = StyleSheet.create({
    divider:{
        alignSelf: 'center',
        width: wp('90%'),
        height: hp('0.1%'),
        backgroundColor: '#CED9F1',
      },
})