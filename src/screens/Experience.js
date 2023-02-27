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
import ButtonCompo from '../components/ButtonCompo';
import CustomView from '../components/CustomView';
import Feather from 'react-native-vector-icons/Feather'

const Experience = () => {
  return (
    <>
      <View style={styles.topHeadingParent}>
        <Text style={styles.topHeading}>Solicitar permiso De importación</Text>
      </View>


      <CustomView text={'Descripción'} icon={ <Feather style={{color:Colors.textColor}} name={'info'} size={20} color={Colors.textColor} />} />
      <CustomView text={'Sustanica Activa'} icon={ <Feather style={{color:Colors.textColor}} name={'info'} size={20} color={Colors.textColor} />} />
      <CustomView text={'Cantidad'} icon={ <Feather style={{color:Colors.textColor}} name={'info'} size={20} color={Colors.textColor} />} />
  

      <View style={{width:wp('80%'),alignSelf:'center',justifyContent:'center',alignItems:'center'}}>

        <Text style={{borderBottomWidth:1,marginVertical:hp('4%')}}>
        Eliminar producto
        </Text>

      <ButtonCompo text={'Continuar'} />
      </View>
    </>
  );
};

export default Experience;

const styles = StyleSheet.create({
  topHeadingParent: {
    width: wp('80%'),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  topHeading: {
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    width: wp('50%'),
    marginVertical: hp('5%'),
    color: Colors.blackHeading,
  },
});
