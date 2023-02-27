import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Platform,
  PermissionsAndroid
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
import LHeading from '../components/heading/LHeading';
import Feather from 'react-native-vector-icons/Feather';
import {launchImageLibrary} from 'react-native-image-picker';

const PersonalInformation = ({navigation}) => {
  const [updateImage, setUpdateImage] = useState({});
  const [image, setImage] = useState();

  console.log("Images=============",image)



  const uploadFromGallery = async () => {
    if (Platform.OS == 'android') {
      const hasPermissions = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'open Camera',
          message: 'I want to access your camera',
        },
      );
      if (hasPermissions == PermissionsAndroid.RESULTS.GRANTED) {
        launchImageLibrary(
          {
            quality: 0.5,
            mediaType: 'photo',
          },
          getImage => {
            if (getImage.didCancel || getImage.errorCode) {
              return console.log('Image Upload Cancelled');
            }
            const image = getImage.assets[0];
            setImage(image.uri);
            console.log(image.uri);
          },
        );
      }
    }
  };

 

  console.log(image)

  return (
    <>
      <View style={styles.topHeader}>
        <BackButton navigation={navigation} />
        <LHeading text={'Informacion personal'} />
      </View>
      <View style={[styles.ParentProfile,]}>
        <View style={{marginTop: hp('4%'),flexDirection:'row'}}>
          <TouchableOpacity onPress={uploadFromGallery} style={styles.update}>
            <Feather name={'camera'} size={17} />
          </TouchableOpacity>
          {image? (
            <Image  source={{uri:image}} style={{width:100,height:100,borderRadius:100,}}/>
          ) : (
            <Image
              style={{width:100,height:100 ,borderRadius:100}}
              source={require('../assets/dprofile.png')}
            />
          )}

        </View>
        <View style={styles.leftIcon}>
          <Entypo name={'dots-three-vertical'} color={'#B4BCDD'} size={25} />
        </View>
      </View>
          <Text style={styles.profileDetail}>Recomendación para tomar la foto de perfil</Text>

<View style={styles.personalDetailList}>

  <LHeading text={'Personal Details'} />

</View>

    </>
  );
};

export default PersonalInformation;

const styles = StyleSheet.create({
  personalDetailList:{
width:wp('90%'),

  },
  profileDetail:{textAlign:'center',alignSelf:'center' ,width:'50%',fontSize:18,marginTop:10},
  update: {
    padding: 3,
    position: 'absolute',
    borderWidth: 1,
    padding: 3,
    borderRadius: 100,
    // alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightBlueSky,
    borderColor: Colors.lightBlueSky,
    marginTop: hp('8%'),
    marginLeft: wp('23%'),
    zIndex: 1,
  },
  leftIcon: {justifyContent: 'center', marginHorizontal: wp('5%')},
  dname: {fontSize: 25, fontWeight: '600', color: Colors.blackHeading},
  ParentProfile: {
    width: wp('70%'),
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'row',
  },
  topHeader: {
    top: hp('1%'),
    width: wp('80%'),
    // backgroundColor: 'yellow',
    height: hp('5%'),
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignSelf: 'center',
    flexDirection: 'row',
  },
});
