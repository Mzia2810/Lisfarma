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

const ButtonCompo = ({text}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={{color:Colors.white}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonCompo;

const styles = StyleSheet.create({
  button: {
    marginVertical:hp('2%'),
    width: wp('80%'),
    // marginHorizontal: wp('5%'),
    backgroundColor: Colors.red,
    borderRadius: 5,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
