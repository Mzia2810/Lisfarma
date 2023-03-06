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
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../assets/theme/Colors';
import FlatListCompo from '../components/FlatListCompo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ProfileContent from '../components/ProfileContent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackButton from '../components/BackButton';
import Fonts from '../assets/theme/Fonts';

const Document = ({navigation}) => {
  return (
    <>
      <View style={styles.ParentProfile}>
        <View style={{marginTop: hp('4%')}}>
          <Image
            style={{borderRadius: 100,marginLeft:wp('6%')}}
            source={require('../assets/dprofile.png')}
          />
          <Text style={styles.dname}>Buenos dias</Text>
          <Text style={{textAlign: 'center',  fontFamily: Fonts.light_300, lineHeight:21,fontSize:18}}>Dra. Cruz Test</Text>
        </View>
        <View style={styles.leftIcon}>
          <Entypo name={'dots-three-vertical'} color={'#B4BCDD'} size={25} />
        </View>
      </View>

      <View style={{marginTop: hp('10%')}}>
        <ProfileContent
          onPress={() => navigation.navigate('PersonalInformation')}
          icon={<Image source={require('../assets/Account.png')} style={{width:wp('5.2%'),height:hp('3.1%')}} />}
          text={'Informacion personal'}
        />
        <ProfileContent
          onPress={() => navigation.navigate('Document')}
          icon={<Image source={require('../assets/doc.png')}  style={{width:wp('5.2%'),height:hp('3.1%')}} />}
          text={'Documentos'}
        />
        <ProfileContent
         onPress={() => navigation.navigate('HomePage')}
           icon={<Image source={require('../assets/Account.png')} style={{width:wp('5.2%'),height:hp('3.1%')}} />}
          text={'Mis pacientes'}
        />
        <ProfileContent
         onPress={() => navigation.navigate('Experience')}
           icon={<Image source={require('../assets/checkbox.png')} style={{width:wp('4.8%'),height:hp('2.5%')}} />}
          text={'Solicitar Permiso Importación'}
        />
        <ProfileContent
          onPress={() => navigation.navigate('Historical')}
          icon={<Image source={require('../assets/doc3.png')} style={{width:wp('5%'),height:hp('3%')}} />}
          text={'Permiso de Importación'}
        />
        <ProfileContent
          icon={<Image source={require('../assets/chat.png')} style={{width:wp('5%'),height:hp('2.5%')}} />}
          text={'Soporte'}
        />
      </View>
    </>
  );
};

export default Document;

const styles = StyleSheet.create({
  leftIcon: {justifyContent: 'center', marginHorizontal: wp('5%')},
  dname: {
    fontSize: 25,
    color: Colors.blackHeading,
    fontFamily: Fonts.bold_600,
    // fontWeight:'600',
    lineHeight:27,
    // marginTop:10,
  },
  ParentProfile: {
    width: wp('70%'),
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'row',
  },
});
