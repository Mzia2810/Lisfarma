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
import Fonts from '../assets/theme/Fonts';
import CustomTextInput from '../components/CustomTextInput';
import LinearGradient from 'react-native-linear-gradient';


const PersonalInformation = ({navigation}) => {
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
  const [value7, setValue7] = useState('');
  const [value8, setValue8] = useState('');
  const [value9, setValue9] = useState('');
  const [value10, setValue10] = useState('');
  const [activeSwitch, setActiveSwitch] = useState('');

  console.log('Images=============', image);

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
    <View style={{backgroundColor:Colors.white,flex:1}}>
      <ScrollView>
        <View style={styles.topHeader}>
          <View >

          <BackButton navigation={navigation} />
          </View>
          <View Style={{marginLeft:10}}>

          <LHeading text={'Informacion personal'} />
          </View>
        </View>
        <View style={[styles.ParentProfile]}>
          <View style={{marginTop: hp('4%'), flexDirection: 'row',marginLeft:wp('5%')}}>
            <TouchableOpacity onPress={uploadFromGallery} style={styles.update}>
              <Feather name={'camera'} size={15} color={'black'} />
            </TouchableOpacity>
            {image ? (
              <Image
                source={{uri: image}}
                style={{width: 100, height: 100, borderRadius: 100}}
              />
            ) : (
              <Image
                style={{width: 100, height: 100, borderRadius: 100}}
                source={require('../assets/dprofile.png')}
              />
            )}
          </View>
         
        </View>
        <Text style={styles.profileDetail}>
          Recomendación para tomar la foto de perfil
        </Text>

        <View style={styles.personalDetailList}>
          <LHeading text={'Personal Details'} />
          <View style={{marginTop: hp('2%'), width: wp('90%')}}>
            <CustomTextInput
             placeholder="Nombre*"
             keyboardType={'numeric'}
             onChangeText={num => setNumber(num)}
             value={number}
             icon={
               <Image
                 source={require('../assets/Account.png')}
                 style={{width: wp('5%'), height: hp('3%')}}
               />
             }
            />
            <CustomTextInput
             placeholder="Apellido paterno*"
             keyboardType={'default'}
             onChangeText={num => setValue1(num)}
             value={value1}
             icon={
               <Image
                 source={require('../assets/Account.png')}
                 style={{width: wp('5%'), height: hp('3%')}}
               />
             }
            />
            <CustomTextInput
             placeholder="Correo electrónico*"
             keyboardType={'default'}
             onChangeText={num => setValue2(num)}
             value={value2}
             icon={
               <Image
                 source={require('../assets/down.png')}
                 style={{width: wp('5%'), height: hp('2.5%')}}
               />
             }
            />
            <CustomTextInput
             placeholder="Numero celular*"
             keyboardType={'default'}
             onChangeText={num => setValue3(num)}
             value={value3}
             icon={
               <Image
                 source={require('../assets/phone.png')}
                 style={{width: wp('4%'), height: hp('3.2%')}}
               />
             }
            />
            <CustomTextInput
             placeholder="Teléfono opciona*"
             keyboardType={'default'}
             onChangeText={num => setValue4(num)}
             value={value4}
             icon={
               <Image
                 source={require('../assets/tele.png')}
                 style={{width: wp('5%'), height: hp('3%')}}
               />
             }
            />
           
          </View>
        </View>
        <View style={styles.personalDetailList}>
          <LHeading text={'Institución Details'} />
          <View style={{marginTop: hp('2%'), width: wp('90%')}}>
            <CustomTextInput
               placeholder="Nombre de la institución donde..."
               keyboardType={'default'}
               onChangeText={num => setValue5(num)}
               value={value5}
               icon={
                 <Image
                   source={require('../assets/bank.png')}
                   style={{width: wp('5%'), height: hp('2.5%')}}
                 />
               }
            />
            <CustomTextInput
               placeholder="Dirección de la Institución*"
               keyboardType={'default'}
               onChangeText={num => setValue6(num)}
               value={value6}
               icon={
                 <Image
                   source={require('../assets/Place.png')}
                   style={{width: wp('5%'), height: hp('4%')}}
                 />
               }
            />
            <CustomTextInput
               placeholder="País / Estado / Ciudad*"
               keyboardType={'default'}
               onChangeText={num => setValue7(num)}
               value={value7}
               icon={
                <Image
                source={require('../assets/Place.png')}
                style={{width: wp('5%'), height: hp('4%')}}
              />
               }
            />
            <CustomTextInput
               placeholder="Código postal*"
               keyboardType={'default'}
               onChangeText={num => setValue8(num)}
               value={value7}
               icon={
                 <Image
                   source={require('../assets/Post.png')}
                   style={{width: wp('5.3%'), height: hp('3%')}}
                 />
               }
            />
            <CustomTextInput
               placeholder="Cedula profesional*"
               keyboardType={'default'}
               onChangeText={num => setValue9(num)}
               value={value9}
               icon={
                 <Image
                   source={require('../assets/doc5.png')}
                   style={{width: wp('5%'), height: hp('3%')}}
                 />
               }
               isIconLeft
            />
            <CustomTextInput
               placeholder="Cedula profesional de especiali..."
               keyboardType={'default'}
               onChangeText={num => setValue10(num)}
               value={value10}
               icon={
                 <Image
                   source={require('../assets/doc5.png')}
                   style={{width: wp('5%'), height: hp('3%')}}
                 />
               }
            />
          
          </View>
        </View>

        <View style={styles.personalDetailList}>
          <LHeading text={'¿Razones para crear la cuenta?'} />

          <CustomCheckBox
            toggleCheckBox={toggleCheckBox}
            CheckBoxText={'Importar  medicamentos para pacientes específicos'}
            setToggleCheckBox={setToggleCheckBox}
          />
          <CustomCheckBox
            toggleCheckBox={toggleCheckBox}
            CheckBoxText={'Importar medicamentos para protocolos clínicos'}
            setToggleCheckBox={setToggleCheckBox}
          />
          <CustomCheckBox
            toggleCheckBox={toggleCheckBox1}
            CheckBoxText={'Expediente médico'}
            setToggleCheckBox={setToggleCheckBox1}
          />
          <CustomCheckBox
            toggleCheckBox={toggleCheckBox2}
            CheckBoxText={'Otros'}
            setToggleCheckBox={setToggleCheckBox2}
          />
        </View>

        <LinearGradient
        style={styles.textArea}
         start={{ x: 0.3, y: 0.5 }} end={{ x: -1, y: 0 }}
    
         colors={['#D9DFF5', '#F2F6FF']}
        >
          <TextInput
            style={styles.textArea}
            textAlignVertical="top"
            multiline
            numberOfLines={3}
            onChangeText={e => setText(e)}
            value={text}
          />
        </LinearGradient>
        <View style={{width: wp('80%'), alignSelf: 'center'}}>
          <ButtonCompo text={'Guardar'} />
        </View>
      </ScrollView>
    </View>
  );
};

export default PersonalInformation;

const styles = StyleSheet.create({
  textArea: {
    borderColor: '#D9DFF5',
    // backgroundColor: '#D9DFF5',
    // opacity:0.5,
    borderWidth: 1,
    width: wp('70%'),
    alignSelf: 'center',
    borderRadius: 5,
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
    marginVertical: hp('3%'),
  },
  profileDetail: {
  fontWeight:'300',
    textAlign: 'center',
    alignSelf: 'center',
    width: '50%',
   fontSize:18,
   fontFamily:Fonts.light_300,
   lineHeight:29,
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
    width: wp('90%'),
    // marginRight:wp('3%'),
    // backgroundColor: 'yellow',
    height: hp('6%'),
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignSelf: 'center',
    flexDirection: 'row',
  },
});
