import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const IconCompo = ({name, color, size,}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() =>navigation.navigate('DoctorProfile')} style={styles.button}>
      {name == 'git-pull-request' ? (
        <Feather name={name} color={color} size={size} />
      ) : (
        <Entypo name="plus" color={'white'} size={20} />
      )}
    </TouchableOpacity>
  );
};

export default IconCompo;

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    backgroundColor: '#003297',
    width: wp('12%'),
    height: hp('7%'),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
