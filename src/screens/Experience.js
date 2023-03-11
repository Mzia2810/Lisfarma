import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Modal,
  Pressable,
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
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/BackButton';

const CustomTextinput = ({
  text,
  icon,
  placeholder,
  onChangeText,
  value,
  keyboardType,
}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 0}}
      colors={['#D9DFF5', '#F2F6FF']}
      style={styles.buttonInputText}>
      <TextInput
        keyboardType={keyboardType}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        style={{
          paddingLeft: 20,
          flexDirection: 'row',
          fontSize: 18,
          lineHeight:21,
          fontWeight: '500',
          fontFamily:Fonts.medium_500,
          alignItems: 'center',
          width: wp('80%'),
          alignContent: 'center',
          color: Colors.blackHeading,
          height: hp('6.5%'),
          // paddingVertical:17,   borderWidth:1,
           
        }}></TextInput>
      <View style={{alignSelf: 'center'}}>{icon}</View>
    </LinearGradient>
  );
};

const Experience = () => {
  const [modalVisible, setModalVisible] = useState(false);

  // form
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');
  const [value6, setValue6] = useState('');

  // dropdown
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
    {label: 'Orange', value: 'Kino'},
    {label: 'Strawberry', value: 'Strawberry'},
  ]);

  const navigation = useNavigation()

  return (
    <View style={{backgroundColor:Colors.white,flex:1}}>
      <View style={styles.topHeadingParent}>
        <View style={{marginRight:10,}}>
          <BackButton navigation={navigation} />
        </View>

        <LHeading text={'Solicitar permiso De importación'} />
      </View>

      <View style={styles.personalDetailList}>
        <LHeading text={'Institución Details'} />
        <View style={{marginTop: hp('0.5%'), width: wp('90%')}}>
          <View style={{zIndex: 1, marginBottom: 5}}>
            <DropDownPicker
              style={{
                borderWidth: 1,
                borderColor: '#D9DFF5',
                backgroundColor: Colors.white,
              }}
              mode="BADGE"
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              dropDownContainerStyle={{
                // backgroundColor: "#D9DFF5",
                borderWidth: 1,
                borderColor: '#D9DFF5',
              }}
              placeholder={'Buscar medicamento'}
              placeholderStyle={{
                color: '#434040',
                fontWeight: '400',
                fontSize: 18,
                lineHeight: 19.45,
              }}
            />
          </View>
          <CustomTextinput
            placeholder="Descripción"
            keyboardType={'default'}
            onChangeText={num => setValue5(num)}
            value={value5}
            icon={
              <Feather
                style={{color: Colors.textColor}}
                name={'info'}
                size={20}
                color={Colors.textColor}
              />
            }
          />
        </View>
        <View style={{marginTop: hp('0.5%'), width: wp('90%'), zIndex: -1}}>
          <CustomTextinput
            placeholder="Sustanica Activa"
            keyboardType={'default'}
            onChangeText={num => setValue3(num)}
            value={value3}
            icon={
              <Feather
                style={{color: Colors.textColor}}
                name={'info'}
                size={20}
                color={Colors.textColor}
              />
            }
          />
        </View>
        <View style={{marginTop: hp('0.5%'), width: wp('90%'), zIndex: -1}}>
          <CustomTextinput
            placeholder="Cantidad"
            keyboardType={'default'}
            onChangeText={num => setValue6(num)}
            value={value6}
            icon={
              <Feather
                style={{color: Colors.textColor}}
                name={'info'}
                size={20}
                color={Colors.textColor}
              />
            }
          />
        </View>
      </View>

      <View
        style={{
          width: wp('80%'),
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{borderBottomWidth: 1, marginVertical: hp('4%')}}>
          Eliminar producto
        </Text>

        <ButtonCompo
          onPress={() => setModalVisible(!modalVisible)}
          text={'Continuar'}
        />
      </View>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent
          visible={modalVisible}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '600',
                    fontFamily: Fonts.bold_600,
                    lineHeight: 31,
                    color: Colors.blackHeading,
                  }}>
                  Recibimos tu solicitud
                </Text>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                  style={{marginLeft: 10, marginVertical: 5}}>
                  <AntDesign name={'closecircleo'} size={25} />
                </TouchableOpacity>
              </View>
              <Text>
                Lo contactaremos con nuestra red de aliados. Escriba su correo
                electrónico y teléfono. En breve se pondran en contacto con
                usted.
              </Text>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Experience;

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
    marginTop: hp('15%'),
  },
  modalView: {
    // flex:1,
    width: wp('85%'),
    height: hp('20%'),
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  topHeadingParent: {
    width: wp('90%'),
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    flexDirection:'row',
    justifyContent:'space-between',
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
    marginTop: hp('5%'),
  },
  personalListText: {
    color: Colors.blackHeading,
    fontSize: 18,
    lineHeight: 22,
  },
  buttonInputText: {
    width: wp('90%'),
    borderColor:Colors.lightBlueSky,
    borderWidth:1,
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
