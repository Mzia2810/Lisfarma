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
import LinearGradient from 'react-native-linear-gradient';
import Fonts from '../assets/theme/Fonts';

const UploadButton = ({text, icon, backgroundColor}) => {
  return (
    <LinearGradient
      colors={backgroundColor ? ['#C6EABF', '#F2F6FF'] : ['#D9DFF5', '#F2F6FF']}

      start={{x: 0.3, y: 0.5}}
      end={{x: -1, y: 0}}
      style={[
        styles.button,
        {backgroundColor: backgroundColor ? '#C6EABF' :'#D9DFF5'}
        
      ]}>
      <TouchableOpacity>
        <View style={styles.seleccioneButton}>
          {icon}
          <Text style={[styles.seleccioneText,{color:backgroundColor ? Colors.blackHeading : Colors.textColor2}]}>{text}</Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default UploadButton;

const styles = StyleSheet.create({
  seleccioneText: {
    // color: Colors.textColor2,
    marginHorizontal: 10,
    fontFamily: Fonts.regular,
    fontWeight: '300',
    fontSize: 16,
    lineHeight: 26,
  },
  seleccioneButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%'),
    alignContent: 'center',
  },
  button: {
    width: wp('80%'),
    // marginHorizontal: wp('5%'),
    // backgroundColor: backgroundColor? '#C6EABF': Colors.lightBlueSky,
    borderRadius: 5,
    padding: 9,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp('1%'),
  },
});
