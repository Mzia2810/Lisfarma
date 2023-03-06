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
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../assets/theme/Colors';
import Fonts from '../assets/theme/Fonts';

const CustomListProfile = ({text, icon}) => {
  return (
    <View style={styles.button}>
      <View
        style={{
          flexDirection: 'row',
          //   justifyContent: 'flex-start',
          alignItems: 'center',
          width: wp('80%'),
          //   alignContent: 'center',
        }}>
        {icon}
        <Text style={styles.personalListText}>{text}</Text>
      </View>
    </View>
  );
};

export default CustomListProfile;

const styles = StyleSheet.create({
  personalListText: {
    color: Colors.blackHeading,
    marginHorizontal: 10,
    fontSize: 18,
    lineHeight: 21,
    fontFamily: Fonts.regular,
  },
  button: {
    width: wp('90%'),
    // marginHorizontal: wp('5%'),
    backgroundColor: Colors.lightBlueSky,
    opacity: 0.5,

    borderRadius: 5,
    padding: 10,
    // justifyContent:'flex-start',
    alignItems: 'flex-start',
    marginVertical: hp('0.7%'),
  },
});
