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
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Colors from '../assets/theme/Colors';
import LHeading from '../components/heading/LHeading';
import BackButton from '../components/BackButton';
import ButtonCompo from '../components/ButtonCompo';
import FlatListCompo from '../components/FlatListCompo';
// import EvilIcons from 'react-native-vector-icons/EvilIcons';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    img: 'Import Permit Number:2424',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    img: 'Import Permit Number:3523',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    img: 'Import Permit Number:353',
  },
  {
    id: '58694a0f-3da1-471f--145571e29d72',
    title: 'Third Item',
    img: 'Import Permit Number:324',
  },
];

const ProfileSetting = () => {
  const [text, setText] = useState('');
  return (
    <>
      <View style={styles.topHeading}>
        <BackButton />
        <View style={{marginVertical: hp('2%')}}>
          <LHeading text={'Solicitar permiso De importación'} />
        </View>
      </View>
      <View style={styles.searchBox}>
        <View style={styles.searchBoxChild}>
          <TouchableOpacity
            style={{position: 'absolute', alignSelf: 'flex-end'}}>
            <EvilIcons name={'search'} color={Colors.textColor} size={35} />
          </TouchableOpacity>
          <MyTextInput
            placeholder={'Buscar medicamento...'}
            value={text}
            onChangeText={() => setText(text)}
          />
        </View>
        <IconCompo name={'git-pull-request'} color={'white'} size={20} />
      </View>

      <View
        style={{
          width: wp('80%'),
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <LHeading text={'Historial Permiso de Importación'} />

        <ButtonCompo text={'Solicitar Permiso de Importación'} />
      </View>
      <View style={styles.dropdown}>
        <View style={[styles.dropdownChild, {marginBottom: hp('1%')}]}>
          <TouchableOpacity style={styles.TouchableOpacityButton}>
            <View style={styles.ImageParent}>
              <Image
                style={styles.img}
                source={require('../assets/pinky.png')}
              />
              <Text style={{marginHorizontal: wp('2%')}}>Sara Castañeda</Text>
            </View>
            <EvilIcons
              name="chevron-down"
              style={{marginRight: wp('1.5%')}}
              size={25}
            />
          </TouchableOpacity>
          <IconCompo name={'git-pull-request'} color={'white'} size={20} />
        </View>
        <ScrollView>
          <FlatListCompo data={DATA} />
        </ScrollView>
      </View>
    </>
  );
};

export default ProfileSetting;

const styles = StyleSheet.create({
  img: {width: wp('8%'), height: hp('4%'), marginLeft: wp('1.5%')},
  ImageParent: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  TouchableOpacityButton: {
    backgroundColor: Colors.lightBlueSky,
    borderRadius: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('70%'),
  },
  dropdownChild: {flexDirection: 'row', justifyContent: 'space-evenly'},
  dropdown: {width: wp('90%'), alignSelf: 'center', justifyContent: 'center'},
  topHeading: {
    marginTop: hp('2%'),
    width: wp('90%'),
    height: hp('12%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    alignSelf: 'center',
  },
  searchBox: {
    width: wp('90%'),
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  searchBoxChild: {
    width: wp('75%'),
    marginVertical: hp('1%'),
    marginRight: 10,
    justifyContent: 'center',
  },
});
