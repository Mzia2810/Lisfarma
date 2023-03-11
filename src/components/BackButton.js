import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../assets/theme/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import { useNavigation } from '@react-navigation/native';

const BackButton = ({navigation}) => {
    // const navigation = useNavigation()
  return (
    <TouchableOpacity
    onPress={()=> navigation.goBack()}
      >
        <LinearGradient
        style={{
          marginTop:3,
          width: wp('8%'),
          height: hp('4%'),
          backgroundColor: Colors.lightBlueSky,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius:5,
        }}
         start={{ x: 0.3, y: 0.5 }} end={{ x: -1, y: 0 }}
         colors={['#D9DFF5', '#F2F6FF']}
         >

      <AntDesign name={'left'} size={15} color={'black'} />
        </LinearGradient>
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({});
