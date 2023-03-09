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
// import LHeading from '../components/heading/LHeading';
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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import UploadButton from '../components/UploadButton';
import Fonts from '../assets/theme/Fonts';

const LHeading = ({text}) => {
  return (
    <View style={{paddingRight: 10}}>
      <Text style={styles.heading}>{text}</Text>
    </View>
  );
};

const Historical = ({navigation}) => {
  const [updateImage, setUpdateImage] = useState({});
  const [image, setImage] = useState();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const [text, setText] = useState('');

  console.log('Images=============', image);

  return (
    <View style={{backgroundColor: Colors.white}}>
      <ScrollView>
        <View style={styles.topHeader}>
          <BackButton navigation={navigation} />
          <View style={styles.topHeading}>
            <LHeading text={'Detalles de permiso de importación'} />
          </View>
        </View>
        <View style={styles.BoldTextParent}>
          <Text style={[styles.BoxText2]}>
            Número de permiso de importación
          </Text>
          <Text style={styles.graytext}>378</Text>
          <Text style={[styles.BoxText2]}>Fecha permiso de importacion</Text>
          <Text style={styles.graytext}>Sept 01, 2021</Text>
          <Text style={[styles.BoxText2]}>Producto</Text>
          <Text style={styles.graytext}>Vial de opddivo 40mg.4ml</Text>
        </View>

        <View style={styles.BoxArea}>
          <Text style={styles.BoxText}>Pago</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.BoxText4}>Estado</Text>
            <TouchableOpacity style={styles.pending}>
              <Text style={styles.pendingText}>Pendiente</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.BoxText4}>Comprobante de pago</Text>
          <UploadButton
            text={'Seleccione'}
            icon={<Feather name={'share'} size={20} color={'black'} />}
          />
        </View>

        {/* Comprobante de domicilio */}
        <View style={styles.BoxArea}>
          <Text style={styles.BoxText}>Documento</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={styles.BoxText4}>Permiso de importación</Text>
          </View>
          <Text style={[styles.BoxText4, {marginTop: hp('4%')}]}>
            Identificación oficial: Frente
          </Text>
          <UploadButton
            text={'Seleccione'}
            icon={<Feather name={'share'} size={20} color={'black'} />}
          />

          <Text style={[styles.BoxText4, {marginTop: hp('4%')}]}>
            Comprobante de domicilio
          </Text>
          <View style={styles.subirView}>
            <View style={styles.subirChildView}>
              <Feather name={'share'} size={20} color={'black'} />
              <Text style={styles.subirText}>Subir nuevo</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Feather name={'download'} size={20} color={'black'} />
              <Text style={styles.subirText}>Subir nuevo</Text>
            </View>
          </View>
          <UploadButton
            text={'Seleccione'}
            icon={<Feather name={'share'} size={20} color={'black'} />}
          />
          <Text style={[styles.BoxText4, {marginTop: hp('4%')}]}>
            Prescripción médica
          </Text>
          <UploadButton
            text={'Seleccione'}
            icon={<Feather name={'share'} size={20} color={'black'} />}
          />

          <Text style={[styles.BoxText4, {marginTop: hp('5%')}]}>RFC</Text>
          <Text style={{fontSize:16,fontWeight:'500',lineHeight:19,fontFamily:Fonts.regular}}>61627282223fg</Text>
          <Text style={[styles.BoxText4, {marginTop: hp('3%')}]}>
            Identificacion oficial testigo 1
          </Text>
          <UploadButton
            text={'Seleccione'}
            icon={<Feather name={'share'} size={20} color={'black'} />}
          />
          <Text style={[styles.BoxText4, {marginTop: hp('1%')}]}>
            Identificacion oficial testigo 2
          </Text>
          <UploadButton
            text={'Seleccione'}
            icon={<Feather name={'share'} size={20} color={'black'} />}
          />
        </View>

        {/* Identificacion oficial testigo 1 */}
        <View style={styles.BoxArea}>
          <View style={styles.informationVIew}>
            <Text style={styles.BoxText}>Información de cliente</Text>
            <FontAwesome name={'angle-down'} size={20} />
          </View>
          <View style={styles.julieImageView}>
            <Image source={require('../assets/julie.png')} />
            <Text
              style={[
                styles.BoxText4,
                {textAlign: 'center', marginLeft: 10, marginTop: 10},
              ]}>
              Julie Matt
            </Text>
          </View>

          <View style={styles.BoxTextView}>
            <Text style={styles.BoxText3}>Nombre: </Text>
            <Text style={styles.BoxTextViewText}>Ximena Torres</Text>
          </View>
          <View style={styles.BoxTextView}>
            <Text style={styles.BoxText3}>nacimiento: </Text>
            <Text style={styles.BoxTextViewText}>11/04/1989</Text>
          </View>
          <View style={styles.BoxTextView}>
            <Text style={styles.BoxText3}>Teléfono: </Text>
            <Text style={styles.BoxTextViewText}>+528181818451 </Text>
          </View>
          <View style={styles.BoxTextView}>
            <Text style={styles.BoxText3}>Número celular: </Text>
            <Text style={styles.BoxTextViewText}>+528181818451 </Text>
          </View>
          <View style={styles.BoxTextView}>
            <Text style={styles.BoxText3}>Correo electronico: </Text>
            <Text style={styles.BoxTextViewText}>tesy@email.com </Text>
          </View>
          <View style={styles.BoxTextView}>
            <Text style={styles.BoxText3}>RFC: </Text>
            <Text style={styles.BoxTextViewText}>test122 </Text>
          </View>
          <View style={styles.BoxTextView}>
            <Text style={styles.BoxText3}>CURP: </Text>
            <Text style={styles.BoxTextViewText}>test12335 </Text>
          </View>
        </View>
        <View style={styles.BoxArea}>
          <View style={styles.BoxHeading}>
            <Text style={styles.BoxText}>Información de contacto</Text>
            <FontAwesome name={'angle-down'} size={20} />
          </View>

          <View style={styles.BoxTextView}>
            <Text style={styles.BoxText3}>Nombre: </Text>
            <Text style={styles.BoxTextViewText}>Ximena Torres</Text>
          </View>
          <View style={styles.BoxTextView}>
            <Text style={styles.BoxText3}>nacimiento: </Text>
            <Text style={styles.BoxTextViewText}>11/04/1989</Text>
          </View>
          <View style={styles.BoxTextView}>
            <Text style={styles.BoxText3}>Teléfono: </Text>
            <Text style={styles.BoxTextViewText}>+528181818451 </Text>
          </View>
          <View style={styles.BoxTextView}>
            <Text style={styles.BoxText3}>Número celular: </Text>
            <Text style={styles.BoxTextViewText}>+528181818451 </Text>
          </View>
          <View style={styles.BoxTextView}>
            <Text style={styles.BoxText3}>Correo electronico: </Text>
            <Text style={styles.BoxTextViewText}>tesy@email.com </Text>
          </View>
          <View style={styles.BoxTextView}>
            <Text style={styles.BoxText3}>RFC: </Text>
            <Text style={styles.BoxTextViewText}>test122 </Text>
          </View>
          <View style={styles.BoxTextView}>
            <Text style={styles.BoxText3}>CURP: </Text>
            <Text style={styles.BoxTextViewText}>test12335 </Text>
          </View>
          <View style={styles.BoxTextView}>
            <Text style={styles.BoxText3}>Dirección </Text>
            {/* <Text style={styles.BoxTextViewText}>test12335  </Text> */}
          </View>
          <View style={styles.BoxTextView}>
            <Text style={styles.BoxText3}>Código Postal : </Text>
            <Text style={styles.BoxTextViewText}>123456 </Text>
          </View>
          <View style={styles.BoxTextView}>
            <Text style={styles.BoxText3}>Ciudad : </Text>
            <Text style={styles.BoxTextViewText}>Ciudad General Escobedo </Text>
          </View>
          <View style={styles.BoxTextView}>
            <Text style={styles.BoxText3}>Estado : </Text>
            <Text style={styles.BoxTextViewText}> Nuevo Leon </Text>
          </View>
          <View style={styles.BoxTextView}>
            <Text style={styles.BoxText3}>París : </Text>
            <Text style={styles.BoxTextViewText}> México </Text>
          </View>

          <View style={styles.CuidadorView}>
            <Text style={styles.checkBoxCuidador}>Cuidador</Text>
            <CheckBox
              // tintColors={ true? '#DFDFF5' : 'green' }
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text style={styles.No}>No</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Historical;

const styles = StyleSheet.create({
  subirText: {
    fontSize: 16,
    fontWeight: '300',
    fontFamily: Fonts.regular,
    lineHeight: 26,
    marginLeft: 10,
    color:'#171C14',
  },
  subirChildView: {flexDirection: 'row', justifyContent: 'space-between'},
  subirView: {
    width: wp('75%'),
    flexDirection: 'row',
    height: hp('6%'),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  BoxTextViewText: {textAlign: 'center',fontSize:16,fontWeight:'500',lineHeight:19,fontFamily:Fonts.regular},
  BoxTextView: {flexDirection: 'row', alignItems: 'center'},
  informationVIew: {
    flexDirection: 'row',
    width: wp('80%'),
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  julieImageView: {
    flexDirection: 'row',
    width: wp('85%'),
    alignSelf: 'center',
    justifyContent: 'flex-start',
    marginVertical: hp('2%'),
  },
  CuidadorView: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: wp('60%'),
    // alignSelf: 'flex-start',
    marginVertical: 10,
  },
  No: {
    fontSize: 16,
    fontWeight: '500',
    color: '#252525',
    marginLeft: 10,
  },
  checkBoxCuidador: {
    fontSize: 16,
    fontWeight: '500',
    color: '#252525',
    marginRight: 10,
    fontFamily: Fonts.medium_500,
  },
  BoxHeading: {
    flexDirection: 'row',
    width: wp('85%'),
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  topHeading: {marginHorizontal: wp('5%'), height: hp('5%')},
  graytext: {
    color: '#666666',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: Fonts.light_300,
    lineHeight: 24,
    marginVertical: hp('0.5%'),
  },
  pendingText: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: Fonts.medium_500,
  },
  pending: {
    width: wp('27%'),
    height: hp('3.5%'),
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#F7BF54',
  },

  BoldTextParent: {
    width: wp('85%'),
    alignSelf: 'center',
    marginTop: hp('7%'),
    justifyContent: 'center',
  },
  button: {
    width: wp('80%'),
    // marginHorizontal: wp('5%'),

    borderRadius: 5,
    padding: 10,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: hp('1%'),
    flexDirection: 'row',
  },
  BoxText2: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: Fonts.bold_600,
    color: Colors.blackHeading,
    lineHeight: 21,
    marginVertical: hp('1%'),
    marginLeft: wp('1%'),
  },
  BoxText: {
    fontSize: 18,
    // fontWeight: '700',
    fontFamily: Fonts.bold,
    color: Colors.blackHeading,
    lineHeight: 19.5,
    marginVertical: hp('1%'),
    marginLeft: wp('1%'),
  },
  BoxText4: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: Fonts.bold_600,
    color: Colors.blackHeading,
    lineHeight: 19.5,
    marginVertical: hp('1%'),
    marginLeft: wp('1%'),
  },
  BoxText3: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Montserrat-Bold',
    color: Colors.blackHeading,
    lineHeight: 19.5,
    marginVertical: hp('0.5%'),
    // marginLeft: wp('1%'),
  },
  BoxArea: {
    borderColor: Colors.lightBlueSky,
    borderWidth: 1,
    width: wp('90%'),
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
    marginVertical: hp('2%'),
  },
  textArea: {
    borderColor: '#D9DFF5',
    backgroundColor: '#D9DFF5',
    opacity: 0.6,
    borderWidth: 1,
    width: wp('90%'),
    alignSelf: 'center',
    borderRadius: 8,
    paddingHorizontal: 15,
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
    textAlign: 'left',
    alignSelf: 'center',
    width: wp('80%'),
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 26,
    fontFamily: 'Montserrat-Regular',
    marginTop: hp('2%'),
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
    top: hp('1.5%'),
    width: wp('100%'),
    marginLeft: wp('11%'),
    // backgroundColor: 'yellow',
    height: hp('5%'),
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  heading: {
    height: 100,
    // width:300,
    // paddingVertical: 10,
    fontSize: 25,
    fontWeight: '600',
    fontFamily: Fonts.bold_600,
    lineHeight: 31,
    color: '#000000',
    paddingRight: 20,
  },
});
