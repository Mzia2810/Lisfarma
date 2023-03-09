import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Platform,
  PermissionsAndroid,
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
import CustomListProfile from '../components/CustomListProfile';
import CheckBox from '@react-native-community/checkbox';
import CustomCheckBox from '../components/CustomCheckBox';
import ButtonCompo from '../components/ButtonCompo';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomTextinput from '../components/CustomTextInput';
import Fonts from '../assets/theme/Fonts';
import LinearGradient from 'react-native-linear-gradient';

const RegisterPatient = ({navigation}) => {
  const [updateImage, setUpdateImage] = useState({});
  const [image, setImage] = useState();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const [text, setText] = useState('');
  const [number, setNumber] = useState('');
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');
  const [value6, setValue6] = useState('');
  const [activeSwitch, setActiveSwitch] = useState('No');

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

  console.log(image);

  return (
    <View style={{backgroundColor:Colors.white}}>
      <ScrollView>
        <View style={styles.topHeader}>
          <BackButton navigation={navigation} />
          <View style={{marginLeft: wp('5%')}}>
            <LHeading text={'Registrar Paciente'} />
          </View>
        </View>

        <View style={[styles.ParentProfile]}>
          <View style={styles.profileArea}>
            <TouchableOpacity onPress={uploadFromGallery} style={styles.update}>
              <Feather name={'camera'} size={15} color={'black'} />
            </TouchableOpacity>
            {image ? (
              <Image source={{uri: image}} style={styles.profileImage} />
            ) : (
              <Image
                style={styles.profileImage}
                source={require('../assets/julieMatt.png')}
              />
            )}
          </View>
        </View>
        <View style={styles.personalDetailList}>
          <View style={{width: wp('90%')}}>
            <CustomTextinput
              keyboardType={'numeric'}
              placeholder="Nombre del Paciente*"
              onChangeText={num => setNumber(num)}
              value={number}
              icon={
                <Image
                  source={require('../assets/Account.png')}
                  style={{width: wp('6%'), height: hp('4%')}}
                />
              }
            />
            <CustomTextinput
              placeholder="Correo electrónico*"
              keyboardType={'default'}
              onChangeText={num => setValue1(num)}
              value={value1}
              icon={
                <Image
                  source={require('../assets/Group1.png')}
                  style={{width: wp('6%'), height: hp('2.7%')}}
                />
              }
            />
            <CustomTextinput
              placeholder="Fecha de nacimiento*"
              keyboardType={'default'}
              onChangeText={num => setValue2(num)}
              value={value2}
              icon={
                <Image
                  source={require('../assets/Calendar.png')}
                  style={{width: wp('6%'), height: hp('4%')}}
                />
              }
            />
            <CustomTextinput
              placeholder="Numero de celular*"
              keyboardType={'default'}
              onChangeText={num => setValue3(num)}
              value={value3}
              icon={
                <Image
                  source={require('../assets/phone.png')}
                  style={{width: wp('5%'), height: hp('4%')}}
                />
              }
            />
            <CustomTextinput
              placeholder="País/ Estado/ Ciudad*"
              keyboardType={'default'}
              onChangeText={num => setValue4(num)}
              value={value4}
              icon={
                <Image
                  source={require('../assets/Place.png')}
                  style={{width: wp('6%'), height: hp('4%')}}
                />
              }
            />
            <CustomTextinput
              placeholder="Dirección*"
              keyboardType={'default'}
              onChangeText={num => setValue5(num)}
              value={value5}
              icon={
                <Image
                  source={require('../assets/Place.png')}
                  style={{width: wp('6%'), height: hp('4%')}}
                />
              }
            />
            <CustomTextinput
              placeholder="código postal**"
              keyboardType={'default'}
              onChangeText={num => setValue5(num)}
              value={value5}
              icon={
                <Image
                  source={require('../assets/Post.png')}
                  style={{width: wp('6%'), height: hp('3%')}}
                />
              }
            />
          </View>
        </View>
        <View style={styles.personalDetailList}>
          <View style={{width: wp('90%')}}>
            <CustomTextinput
              placeholder="CURP*"
              keyboardType={'default'}
              onChangeText={num => setValue5(num)}
              value={value5}
              icon={
                <Image
                  source={require('../assets/doc.png')}
                  style={{width: wp('5%'), height: hp('3%')}}
                />
              }
            />
            <CustomTextinput
              placeholder="RFC*"
              keyboardType={'default'}
              onChangeText={num => setValue5(num)}
              value={value5}
              icon={
                <Image
                  source={require('../assets/doc.png')}
                  style={{width: wp('5%'), height: hp('3%')}}
                />
              }
            />

            <LinearGradient
              style={styles.textArea2}
              start={{x: 0.3, y: 0.5}}
              end={{x: -1, y: 0}}
              colors={['#D9DFF5', '#F2F6FF']}>
              <Image
                source={require('../assets/doc1.png')}
                style={styles.DiagnosticImage}
              />
              <TextInput
                placeholder="Diagnóstico*"
                textAlignVertical="top"
                multiline
                numberOfLines={6}
                onChangeText={e => setText(e)}
                value={text}
              />
            </LinearGradient>
          </View>
        </View>

        <View style={styles.personalDetailList}>
          <Text style={styles.Tienes}> ¿Tienes cuidador?</Text>
        </View>

        <View style={styles.textArea}>
          <TouchableOpacity
            style={[
              styles.SwitchButton,
              {backgroundColor: activeSwitch == 'Si' ? '#D9DFF5' : Colors.white},
            ]}
            onPress={() => setActiveSwitch('Si')}>
            <Text style={styles.SwitchButtonText}>Sí</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.SwitchButton,
              {backgroundColor: activeSwitch == 'No' ? '#D9DFF5' : Colors.white   },
            ]}
            onPress={() => setActiveSwitch('No')}>
            <Text style={styles.SwitchButtonText}>No</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonView}>
          <ButtonCompo text={'Guardar'} />
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterPatient;

const styles = StyleSheet.create({
  buttonView: {width: wp('80%'), alignSelf: 'center'},
  DiagnosticImage: {
    width: wp('5%'),
    height: hp('3%'),
    position: 'absolute',
    margin: 8,
  },
  profileArea: {
    marginTop: hp('4%'),
    flexDirection: 'row',
    marginLeft: wp('5%'),
    marginBottom: hp('2%'),
  },
  textArea2: {marginTop:5,
    paddingHorizontal: 35,
    borderColor: '#D9DFF5',
    // backgroundColor: '#D9DFF5',
    // opacity: 0.5,
    borderWidth: 1,
    width: wp('90%'),
    alignSelf: 'center',
    borderRadius: 5,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: Fonts.light_300,
  },
  profileImage: {width: 100, height: 100, borderRadius: 100},
  ParentProfile: {
    width: wp('70%'),
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'row',
  },

  SwitchButton: {
    padding: 5,
    justifyContent: 'center',
    width: wp('40%'),
    height: hp('6.6%'),
    borderRadius: 40,
  },
  SwitchButtonText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    fontFamily: Fonts.medium_500,
  },
  textArea: {
    padding: 2,
    borderColor: '#D9DFF5',
    backgroundColor: Colors.white,
    opacity: 0.5,
    borderWidth: 1,
    width: wp('88%'),
    alignSelf: 'center',
    borderRadius: 5,
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp('2%'),
    justifyContent: 'space-between',
  },
  CheckBoxText: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 23,
    marginHorizontal: wp('2%'),
  },
  CheckBoxArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('70%'),
  },
  personalDetailList: {
    width: wp('90%'),
    alignSelf: 'center',

  },
  profileDetail: {
    fontWeight: '300',
    textAlign: 'center',
    alignSelf: 'center',
    width: '50%',
    fontSize: 18,
    marginTop: 10,
    // fontFamily:'Montserrat-Regular'
  },
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
    marginLeft: wp('5%'),
    // backgroundColor: 'yellow',
    height: hp('6%'),
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
  Tienes: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 31,
    fontFamily: Fonts.light_300,
    color:Colors.blackHeading,
  },
});
