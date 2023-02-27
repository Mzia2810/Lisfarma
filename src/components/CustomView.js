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
  
  const CustomView = ({text,icon}) => {
    return (
      <View style={styles.button}>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:wp('80%'),alignContent:'center'}}>
        <Text style={{color:Colors.textColor}}>{text}</Text>
      
      {icon}

        </View>
      </View>
    );
  };
  
  export default CustomView;
  
  const styles = StyleSheet.create({
    button: {
      width: wp('90%'),
      marginHorizontal: wp('5%'),
      backgroundColor: Colors.lightBlueSky,
      borderRadius: 5,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical:hp('1%'),
    },
  });
  