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
import Fonts from '../assets/theme/Fonts';
import LinearGradient from 'react-native-linear-gradient';

const ButtonCompo = ({text,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} >
      <LinearGradient 
      style={styles.button}
       start={{ x: 0.3, y: 0.5 }} end={{ x: -1, y: 0 }}
       colors={['#D63E3E', '#EF4444']}
      >

      <Text style={{color:Colors.white ,fontFamily:Fonts.medium_500,fontSize:16,}}>{text}</Text>
      </LinearGradient>
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
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
