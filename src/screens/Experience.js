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
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Colors from '../assets/theme/Colors';
import ButtonCompo from '../components/ButtonCompo';
import CustomView from '../components/CustomView';
import Feather from 'react-native-vector-icons/Feather';
// import CustomTextinput from '../components/CustomTextInput';
import LHeading from '../components/heading/LHeading';
import Fonts from '../assets/theme/Fonts';

const CustomTextinput = ({
  text,
  icon,
  placeholder,
  onChangeText,
  value,
  keyboardType,
}) => {
  return (
    <View style={styles.button}>
      <TextInput
        keyboardType={keyboardType}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        style={{
          paddingLeft: 20,
          flexDirection: 'row',
          fontSize: 16,
          fontWeight: '500',
          alignItems: 'center',
          width: wp('80%'),
          alignContent: 'center',
          color: Colors.blackHeading,
          height: hp('6%'),
        }}></TextInput>
      <View style={{alignSelf: 'center'}}>{icon}</View>
    </View>
  );
};

const Experience = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');
  const [value6, setValue6] = useState('');
  return (
    <>
      <View style={styles.topHeadingParent}>
        <LHeading text={'Solicitar permiso De importación'} />
      </View>

      <View style={styles.personalDetailList}>
        <LHeading text={'Institución Details'} />
        <View style={{marginTop: hp('0.5%'), width: wp('90%')}}>
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
        <View style={{marginTop: hp('0.5%'), width: wp('90%')}}>
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
        <View style={{marginTop: hp('0.5%'), width: wp('90%')}}>
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
          // animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{position: 'absolute'}}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '600',
                    fontFamily: Fonts.bold_600,
                    lineHeight: 31,
                  }}>
                  Alianza Comercial
                </Text>

                <Text>
                  Lo contactaremos con nuestra red de aliados. Escriba su correo
                  electrónico y teléfono. En breve se pondran en contacto con
                  usted.
                </Text>

                <TextInput
                  style={{
                    borderWidth: 1,
                    backgroundColor: '#D9DFF5',
                    opacity: 0.5,
                    borderRadius: 5,
                    borderColor: '#D9DFF5',
                    padding: 10,
                    marginTop: 10,
                  }}
                  placeholder="Ejemplo@ejemplo.com"
                  keyboardType={'default'}
                  onChangeText={num => setValue4(num)}
                  value={value4}
                />
                <TextInput
                  style={{
                    marginTop: 10,
                    borderWidth: 1,
                    backgroundColor: '#D9DFF5',
                    opacity: 0.5,
                    borderRadius: 5,
                    borderColor: '#D9DFF5',
                    padding: 10,
                  }}
                  placeholder="Teléfono"
                  keyboardType={'default'}
                  onChangeText={num => setValue4(num)}
                  value={value4}
                />
              </View>

              <View style={{width: wp('65%'), alignSelf: 'center',marginTop:hp('30%')}}>
                <TouchableOpacity onPress={() =>setModalVisible(!modalVisible)} style={styles.buttonModal}>
                  <Text
                    style={{
                      color: Colors.white,
                      fontFamily: Fonts.medium_500,
                      fontSize: 16,
                    }}>
                   Continuar
                  </Text>
                </TouchableOpacity>
              </View>
                <Text style={{borderBottomWidth:1}}>Cancelar</Text>
              {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable> */}
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default Experience;

const styles = StyleSheet.create({
  buttonModal: {
    marginVertical:hp('2%'),
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
    width: wp('80%'),
    height: hp('50%'),
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
    width: wp('80%'),
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
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
  button: {
    width: wp('90%'),
    // marginHorizontal: wp('5%'),
    backgroundColor: 'rgba(217, 223, 245, 1)' + 0.7,
    opacity: 0.5,
    flexDirection: 'row',
    borderRadius: 5,
    // padding: 3,
    // justifyContent:'flex-start',
    alignItems: 'flex-start',
    marginVertical: hp('0.7%'),
  },
});
