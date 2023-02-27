import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HeaderCompo from '../components/HeaderCompo';
import MyTextInput from '../components/MyTextInput';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import IconCompo from '../components/heading/IconCompo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Colors from '../assets/theme/Colors';

const FlatListCompo = ({data}) => {
  return (
    <View
    style={{
      width: wp('90%'),
      justifyContent: 'center',
      alignSelf: 'center',
    }}>
    <FlatList
   
      data={data}
      renderItem={item => (
        <TouchableOpacity
          // onPress={onPress}
          style={styles.listBtn}>
          <View style={styles.listChild}>
            <View style={styles.listImage}>
              <Image source={require('../assets/matt.png')} />
              <Text style={styles.listText}>Julie</Text>
            </View>

            <Image source={require('../assets/Vector.png')} />
          </View>
          <View
            style={styles.divider}></View>

          <View style={styles.listChild}>
            <Text style={styles.textBottom}>Fecha de Registro</Text>
            <Text>Sept 01, 2021</Text>
          </View>
          <View style={styles.listChild}>
            <Text style={styles.textBottom}>Diagnóstico</Text>
            <Text>VIAL DE OPDDIVO 40MG/4ML</Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
      // extraData={selectedId}
    />
  </View>
  )
}

export default FlatListCompo

const styles = StyleSheet.create({
    searchBox: {
      width: wp('90%'),
      alignSelf: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    searchBoxChild: {
      width: wp('75%'),
      marginVertical: hp('2%'),
      marginRight: 10,
      justifyContent: 'center',
    },
    divider:{
      width: wp('80%'),
      height: hp('0.1%'),
      backgroundColor: Colors.lightBlueSky,
      alignSelf: 'center',
    },
    listBtn: {
      width: wp('90%'),
      borderWidth: 1,
      borderRadius: 5,
      marginVertical: 10,
      borderColor: Colors.lightBlueSky,
    },
    listChild: {
      width: wp('90%'),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
    },
    listImage: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: wp('30%'),
    },
    listText: {
      fontSize: 18,
      fontWeight: '600',
      lineHeight: 21,
      color: Colors.textColor,
    },
    textBottom: {
      fontSize: 16,
      fontWeight: '600',
      lineHeight: 19.5,
      color: Colors.blackHeading,
    },
  });
  