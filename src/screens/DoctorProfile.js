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

const DoctorProfile = ({navigation}) => {
    
  return (
    <>
   
      <View style={styles.ParentProfile}>
        <View style={{marginTop: hp('4%')}}>
          <Image
            style={{borderRadius: 100}}
            source={require('../assets/dprofile.png')}
          />
          <Text style={styles.dname}>Buenos dias</Text>
          <Text style={{textAlign: 'center'}}>Dra. Cruz Test</Text>
        </View>
        <View style={styles.leftIcon}>
          <Entypo name={'dots-three-vertical'} color={'#B4BCDD'} size={25} />
        </View>
      </View>

<View style={{marginTop:hp('10%')}}>

<ProfileContent onPress={() =>navigation.navigate('PersonalInformation')} icon={ <AntDesign name={'user'} size={25} />} text={'Informacion personal'} />
<ProfileContent icon={ <Ionicons name={'md-document-text-outline'} size={25} />} text={'Documentos'} />
<ProfileContent icon={ <AntDesign name={'user'} size={25} />} text={'Mis pacientes'} />
<ProfileContent icon={ <Ionicons name={'md-document-text-outline'} size={25} />} text={'Solicitar Permiso Importación'} />
<ProfileContent icon={ <Ionicons name={'md-document-text-outline'} size={25} />} text={'Historial Permiso de Importación'} />
<ProfileContent icon={ <Ionicons name={'chatbox-ellipses-outline'} size={25} />} text={'Chat'} />
</View>
     
    </>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  
  leftIcon: {justifyContent: 'center', marginHorizontal: wp('5%')},
  dname: {fontSize: 25, fontWeight: '600', color: Colors.blackHeading},
  ParentProfile: {
    width: wp('70%'),
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'row',
  },
});
