import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Pressable
} from 'react-native';
import React, {useState,} from 'react';
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
import DropDownPicker from 'react-native-dropdown-picker';
import DropdownCompo from '../components/DropdownCompo';
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
  const [index1,setIndex1] = useState(+1)
  const [index2,setIndex2] = useState(+1)
console.log('Values',index1,index2)

  const handleDropdown1 = () => {
    setIndex1(+1)
    setIndex2(-1)
  }
  const handleDropdown2 = () => {
    setIndex1(-1)
    setIndex2(+1)
  }

  return (
    <View style={{backgroundColor:Colors.white,flex:1}}>
      <View style={styles.topHeading}>
        <BackButton />
        <View>
          <LHeading text={'Solicitar permiso De importación'} />
        </View>
      </View>
    

      <View
        style={styles.buttomAndHeading}>
        <View Style={{width: wp('80%'), alignSelf: 'center'}}>
          <ButtonCompo text={'Solicitar Permiso de Importación'} />
        </View>
        <LHeading text={'Historial Permiso de Importación'} />
      </View>
      <View style={[styles.dropdown,]}>
        <Pressable onPress={handleDropdown1}   style={{zIndex: index1 }}>
        <DropdownCompo index1={index1}  placeholder={'Seleccionar paciente'} />

        </Pressable>
        <Pressable onPress={handleDropdown2}  style={{zIndex: index2}}>

        <DropdownCompo  placeholder={'Seleccionar estado'} />
        </Pressable>
    
        <ScrollView >
          <FlatListCompo data={DATA} />
        </ScrollView>
      </View>
    </View>
  );
};

export default ProfileSetting;

const styles = StyleSheet.create({
  buttomAndHeading:{
    width: wp('80%'),
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: -25,
  },
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
    width: wp('75%'),
    marginLeft: -15,
  },
  dropdownChild: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: wp('95%'),
  },
  dropdown: {
    width: wp('90%'),
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
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
