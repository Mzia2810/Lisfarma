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
import LinearGradient from 'react-native-linear-gradient';

const CustomListProfile = ({
  text,
  icon,
  isIconLeft,
  placeholder,
  onChangeText,
  value,
  keyboardType,
  numberOfLines,
}) => {
  return (
    // <LinearGradient 
    // start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
    
    // colors={['#D9DFF5', '#F2F6FF']}
    
    // // style={{flex: 1}}
    // >
      <LinearGradient
       start={{ x: 0, y: 0 }} end={{ x: 0, y: 0 }}
       colors={['#D9DFF5', '#F2F6FF']}
        style={[
          styles.button,
          // {flexDirection: isIconLeft ? 'row' : 'row-reverse' }
        ]}>
        <View style={{alignSelf: 'center', marginHorizontal: 7}}>{icon}</View>

        <TextInput
          multiline
          numberOfLines={numberOfLines}
          keyboardType={keyboardType}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          style={{
            flexDirection: 'row',
            fontSize: 18,
            lineHeight:21.9,
            fontWeight: '500',
            fontFamily:Fonts.medium_500,
            alignItems: 'center',
            width: wp('70%'),
            alignContent: 'center',
            color: Colors.blackHeading,
            height: hp('6%'),
            // borderWidth:1,
            // borderColor:'black',
          }}></TextInput>
      </LinearGradient>
    // </LinearGradient>
  );
};

export default CustomListProfile;

const styles = StyleSheet.create({
  personalListText: {
    color: Colors.blackHeading,
    fontSize: 18,
    lineHeight: 22,
  },
  button: {
    width: wp('90%'),
    borderWidth:1,
    borderColor:'#D9DFF5',
    // marginHorizontal: wp('5%'),
    // backgroundColor: 'rgba(217, 223, 245, 1)' + 0.7,
    // opacity: 0.5,
    flexDirection: 'row',
    borderRadius: 5,
    padding: 3,
    // justifyContent:'flex-start',
    alignItems: 'flex-start',
    marginVertical: hp('0.7%'),
  },
});
