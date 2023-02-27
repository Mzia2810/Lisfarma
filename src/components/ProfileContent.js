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
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../assets/theme/Colors';
import FlatListCompo from '../components/FlatListCompo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProfileContent = ({icon, text,onPress}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.list}>
        <View style={styles.itemsList}>
          <View style={styles.information}>
            {icon}
            <Text style={styles.text}>{text}</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <AntDesign name={'right'} />
          </View>
        </View>
      </TouchableOpacity>
      {text == 'Chat' ? (
       null
      ) :  <View
      style={styles.divider}></View>}
    </>
  );
};

export default ProfileContent;

const styles = StyleSheet.create({
    divider:{
        alignSelf: 'center',
        width: wp('80%'),
        height: hp('0.1%'),
        backgroundColor: '#CED9F1',
      },
  text: {
    fontSize: 16,
    fontWeight: '500',
    marginHorizontal: wp('2%'),
  },
  information: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemsList: {
    width: wp('80%'),
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'row',
  },
  list: {
    width: wp('80%'),
    marginVertical: hp('0.5%'),
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: hp('0.7%'),
    // borderBottomWidth: 0.5,
  },
});
