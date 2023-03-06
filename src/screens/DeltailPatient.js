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

const DetailPatient = ({navigation}) => {
  const [updateImage, setUpdateImage] = useState({});
  const [image, setImage] = useState();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const [text, setText] = useState('');

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
    <>
      <ScrollView>
        <View style={styles.topHeader}>
          <BackButton navigation={navigation} />
          <View style={{marginRight: 5}}>
            <LHeading text={'Detalled del Paciente'} />
          </View>
        </View>
        <View style={[styles.ParentProfile]}>
          <View
            style={{
              marginTop: hp('3%'),
              flexDirection: 'row',
              marginLeft: wp('5%'),
            }}>
            <Image
              style={{width: 90, height: 90, borderRadius: 100, marginLeft: 10}}
              source={require('../assets/julieMatt.png')}
            />
          </View>
        </View>
        <Text style={styles.BoldText}>Julie Matt</Text>

        {/*  Details of Patient */}
        <View
          style={{
            width: wp('90%'),
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: hp('2%'),
          }}>
          <View style={styles.listBtn}>
            <View style={styles.listChild}>
              <Text style={styles.textBottom}>Fecha de Registro</Text>
              <Text style={styles.secText}>Sept 01, 2021</Text>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.listChild}>
              <Text style={styles.textBottom}>Diagnóstico</Text>
              <Text>Test</Text>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.listChild}>
              <Text style={styles.textBottom}>Fecha de nacimiento</Text>
              <Text style={styles.secText}>Sept 01, 1980</Text>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.listChild}>
              <Text style={styles.textBottom}>CURP</Text>
              <Text style={styles.secText}>61627282223fg</Text>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.listChild}>
              <Text style={styles.textBottom}>RFC</Text>
              <Text style={styles.secText}>sdrdfhhjasse</Text>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.listChild}>
              <Text style={styles.textBottom}>Direccion</Text>
              <Text style={styles.secText}>His W</Text>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.listChild}>
              <Text style={styles.textBottom}>Código postal</Text>
              <Text style={styles.secText}>66460</Text>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.listChild}>
              <Text style={styles.textBottom}>Ciudad</Text>
              <Text style={styles.secText}>Anáhuac</Text>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.listChild}>
              <Text style={styles.textBottom}>Estado</Text>
              <Text style={styles.secText}>nuevo</Text>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.listChild}>
              <Text style={styles.textBottom}>País</Text>
              <Text style={styles.secText}>MX</Text>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.listChild}>
              <Text style={styles.textBottom}>Teléfono</Text>
              <Text style={styles.secText}>+123456789</Text>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.listChild}>
              <Text style={styles.textBottom}>Correo electrónico</Text>
              <Text style={styles.secText}>mj@gmail.com</Text>
            </View>
          </View>
        </View>

        <View style={styles.personalDetailList}>
          <CustomCheckBox
            style={{borderColor: '#D9DFF5'}}
            toggleCheckBox={toggleCheckBox}
            CheckBoxText={'Cuidador'}
            setToggleCheckBox={setToggleCheckBox}
          />
        </View>

        <View style={{width: wp('80%'), alignSelf: 'center'}}>
          <ButtonCompo
            onPress={() => navigation.navigate('RegisterPatient')}
            text={'Solicitar permiso'}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default DetailPatient;

const styles = StyleSheet.create({
  secText:{
 fontSize:16,
 fontWeight:'500',
 lineHeight:19,
 fontFamily:Fonts.medium_500,
  },
  searchBox: {
    width: wp('90%'),
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  searchBoxChild: {
    width: wp('75%'),
    marginVertical: hp('2%'),
    marginRight: 10,
    justifyContent: 'center',
  },
  divider: {
    width: wp('85%'),
    height: hp('0.1%'),
    backgroundColor: Colors.lightBlueSky,
    alignSelf: 'center',
  },
  listBtn: {
    width: wp('90%'),
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    borderColor: Colors.lightBlueSky,
  },
  listChild: {
    width: wp('90%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  listImage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('30%'),
  },
  listText: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 21,
    color: Colors.textColor,
  },
  textBottom: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 19.5,
    fontFamily:Fonts.bold_600,
    color: Colors.blackHeading,
  },
  BoldText: {
    fontSize: 25,
    alignSelf: 'center',
    color: Colors.blackHeading,
    marginTop: hp('1%'),
    paddingTop: 10,
    fontFamily: Fonts.bold_600,
    lineHeight: 21,
  },
  textArea: {
    borderColor: '#D9DFF5',
    backgroundColor: '#D9DFF5',
    opacity: 0.5,
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
    marginVertical: hp('2%'),
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
