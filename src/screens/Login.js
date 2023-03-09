import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Modal,
  Pressable,
  ImageBackground,
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
import ButtonCompo from '../components/ButtonCompo';
import CustomView from '../components/CustomView';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import CustomTextinput from '../components/CustomTextInput';
import LHeading from '../components/heading/LHeading';
import Fonts from '../assets/theme/Fonts';
import LinearGradient from 'react-native-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';
import {useNavigation} from '@react-navigation/native';
import BackButton from '../components/BackButton';
import CustomTextInput from '../components/CustomTextInput';
import CustomCheckBox from '../components/CustomCheckBox';

const Login = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  // form
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');
  const [value6, setValue6] = useState('');

  const backgroundImage = require('../assets/loginImage.png');

  const navigation = useNavigation();

  return (
    <>
      <ImageBackground
        source={backgroundImage}
        style={{width: wp('100%'), height: hp('50%')}}></ImageBackground>
      <View
        style={{
          backgroundColor: Colors.white,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          marginTop: -150,
          height:hp('100%'),
        }}>
        <View style={styles.personalDetailList}>
          <View style={{width: wp('65%'), alignSelf: 'center'}}>
            <Image source={require('../assets/lisfarmalogo.png')} />
          </View>
          <Text
            style={{
              fontSize: 26,
              fontWeight: '700',
              lineHeight: 36,
              textAlign: 'center',
              marginVertical: 20,
              color: '#04122B',
            }}>
            Inisiar Sesión
          </Text>

          <View style={{marginTop: hp('0.5%'), width: wp('90%')}}>
            <CustomTextInput
              placeholder="Correo electrónico"
              keyboardType={'default'}
              onChangeText={num => setValue5(num)}
              value={value5}
            />
          </View>
          <View style={{marginTop: hp('0.5%'), width: wp('90%'), zIndex: -1}}>
            <CustomTextInput
              placeholder="Contraseña"
              keyboardType={'default'}
              onChangeText={num => setValue3(num)}
              value={value3}
            />
          </View>
        </View>

        <View
          style={{
            width: wp('90%'),
            justifyContent: 'flex-start',
            alignSelf: 'center',
          }}>
          <CustomCheckBox
            toggleCheckBox={toggleCheckBox}
            CheckBoxText={'Mantener sesión activa'}
            setToggleCheckBox={setToggleCheckBox}
            color={'#04122B'}
          />
        </View>
        <View
          style={{
            width: wp('90%'),
            alignSelf: 'center',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <ButtonCompo text={'Entrar'} />

          <Text
            style={{
              marginVertical: hp('1%'),
              fontSize: 18,
              fontWeight: '500',
              lineHeight: 21,
              fontFamily: Fonts.medium_500,
            }}>
            ¿Olvidaste tu contraseña?
          </Text>
          <View style={{flexDirection:'row',justifyContent:'center',marginTop:hp('8%')}}>
            <Text style={{fontSize:18,fontWeight:'400',lineHeight:21,fontFamily:Fonts.regular}}>¿No tienes tu cuenta?</Text>
            <TouchableOpacity>

            <Text style={{fontSize:18,fontWeight:'600',lineHeight:21,fontFamily:Fonts.bold_600,color:Colors.blackHeading}}>Regístrate</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  buttonModal: {
    marginVertical: hp('2%'),
    width: wp('65%'),
    // marginHorizontal: wp('5%'),
    backgroundColor: Colors.red,
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    // marginTop: hp('15%'),
  },

  topHeadingParent: {
    width: wp('90%'),
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topHeading: {
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    width: wp('50%'),
    marginVertical: hp('5%'),
    color: Colors.blackHeading,
  },
  personalDetailList: {
    width: wp('90%'),
    alignSelf: 'center',
    marginTop: hp('3%'),
  },
  personalListText: {
    color: Colors.blackHeading,
    fontSize: 18,
    lineHeight: 22,
  },
  buttonInputText: {
    width: wp('90%'),
    // marginHorizontal: wp('5%'),
    // backgroundColor: 'rgba(217, 223, 245, 1)' + 0.7,
    // opacity: 0.5,
    flexDirection: 'row',
    borderRadius: 5,
    // padding: 3,
    // justifyContent:'flex-start',
    alignItems: 'flex-start',
    marginVertical: hp('0.7%'),
  },
});
