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
import UploadButton from '../components/UploadButton';
import Fonts from '../assets/theme/Fonts';
import LinearGradient from 'react-native-linear-gradient';
import CustomTextInput from '../components/CustomTextInput';

const Documentos = ({navigation}) => {
  const [updateImage, setUpdateImage] = useState({});
  const [image, setImage] = useState();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const [text, setText] = useState('');
  const [text1, setText1] = useState('');

  console.log('Images=============', image);

  return (
    <View style={{backgroundColor:Colors.white,flex:1}}>
      <ScrollView>
        <View style={styles.topHeader}>
          <View>
            <BackButton navigation={navigation} />
          </View>
          <View style={{marginHorizontal: wp('5%')}}>
            <LHeading text={'Documentos'} />
          </View>
        </View>

        <View style={styles.topTextInput}>
          <CustomTextInput
            placeholder="*RFC"
            keyboardType={'default'}
            onChangeText={num => setText1(num)}
            value={text1}
          />
        </View>

        <Text style={styles.profileDetail}>
          En esta sección puedes elegir entre hacer la foto o subir la imagen en
          formato jpg, png, tiff o pdf
        </Text>

        <View style={styles.BoxArea}>
          <Text style={styles.BoxText}>Identificacion Ofical</Text>
          <Text style={styles.BoxText}>Frente</Text>
          <UploadButton
            text={'Seleccione'}
            icon={<Feather name={'share'} size={20} color={'black'} />}
          />

          <Text style={styles.BoxText}>Reverso</Text>
          <View style={styles.button}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <AntDesign name={'checkcircle'} size={20} color={'#259613'} />
              <Text style={styles.upload}>Uploaded avc.png</Text>
            </View>
            <Image source={require('../assets/del.png')} />
          </View>
        </View>

        {/* Comprobante de domicilio */}
        <View style={styles.BoxArea}>
          <Text style={styles.BoxText}>Comprobante de domicilio</Text>
          <Text style={styles.BoxText}>Frente</Text>
          <UploadButton
            text={'Seleccione'}
            icon={<Feather name={'share'} size={20} color={'black'} />}
          />

          <Text style={styles.BoxText}>Reverso</Text>
          <UploadButton
            backgroundColor={'#C6EABF'}
            text={'Uploading 88%'}
          />
        </View>

        {/* Identificacion oficial testigo 1 */}
        <View style={styles.BoxArea}>
          <Text style={styles.BoxText}>Identificacion oficial testigo 1</Text>
          <Text style={styles.BoxText}>Frente</Text>
          <UploadButton
            text={'Seleccione'}
            icon={<Feather name={'share'} size={20} color={'black'} />}
          />

          <Text style={styles.BoxText}>Reverso</Text>
          <UploadButton
            text={'Seleccione'}
            icon={<Feather name={'share'} size={20} color={'black'} />}
          />
        </View>

        {/* Identificacion oficial testigo 2 */}
        <View style={styles.BoxArea}>
          <Text style={styles.BoxText}>Identificacion oficial testigo 2</Text>
          <Text style={styles.BoxText}>Frente</Text>
          <UploadButton
            text={'Seleccione'}
            icon={<Feather name={'share'} size={20} color={'black'} />}
          />

          <Text style={styles.BoxText}> </Text>
          <UploadButton
            text={'Seleccione'}
            icon={<Feather name={'share'} size={20} color={'black'} />}
          />
        </View>

      

       
        <View style={{width: wp('90%'), alignSelf: 'center'}}>
          <Text style={[styles.BoxText, {lineHeight: 36}]}>
            Aviso de Privacidad:
          </Text>
          <Text
            style={styles.lastText}>
            Los documentos guardados estarán disponibles cuando solicite un
            nuevo permiso de importación, su información es confidencial y será
            tratada como tal.
          </Text>
        </View>

        <View style={{width: wp('80%'), alignSelf: 'center'}}>
          <ButtonCompo text={'Guardar'} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Documentos;

const styles = StyleSheet.create({
  lastText:{
    fontFamily: Fonts.light_300,
    fontSize: 16,
    fontWeight: '300',
    lineHeight:24,
  },
  upload: {
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 21,
    fontFamily: Fonts.light_300,
    marginHorizontal: wp('2%'),
    color:Colors.blackHeading,
  },
  topTextInput: {width: wp('90%'), alignSelf: 'center', marginTop: hp('3%')},
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
  BoxText: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: Fonts.bold_600,
    color: Colors.blackHeading,
    lineHeight: 19.5,
    marginVertical: hp('1%'),
    marginLeft: wp('1%'),
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
    // backgroundColor: '#D9DFF5',
    // opacity: 0.6,
    borderWidth: 1,
    width: wp('90%'),
    alignSelf: 'center',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 18,
    fontWeight: '500',
    fontFamily: Fonts.light_300,
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
    width: wp('90%'),
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 26,
    fontFamily: Fonts.regular,
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
    top: hp('1%'),
    width: wp('100%'),
    marginLeft: wp('11%'),
    // backgroundColor: 'yellow',
    height: hp('5%'),
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'center',
    flexDirection: 'row',
  },
});
