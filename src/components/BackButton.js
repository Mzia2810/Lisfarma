import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../assets/theme/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

const BackButton = ({navigation}) => {
    // const navigation = useNavigation()
  return (
    <TouchableOpacity
    onPress={()=> navigation.goBack()}
      style={{
        width: wp('10%'),
        height: hp('5%'),
        backgroundColor: Colors.lightBlueSky,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:5,
      }}>
      <AntDesign name={'left'} size={25} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({});
