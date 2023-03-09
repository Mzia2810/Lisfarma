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
import FlatListCompo from '../components/FlatListCompo';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    img: require('../assets/pinky.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    img: require('../assets/matt.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    img: require('../assets/julie.png'),
  },
  {
    id: '58694a0f-3da1-471f--145571e29d72',
    title: 'Third Item',
    img: require('../assets/Rectangle5938.png'),
  },
];
const HomePage = () => {
  const [text, setText] = useState('');
  const [selectedId, setSelectedId] = useState();

  return (
    <View style={{backgroundColor:Colors.white,flex:1}}>
      <HeaderCompo />
      <View style={styles.searchBox}>
        <View style={styles.searchBoxChild}>
          <TouchableOpacity
            style={{position: 'absolute', alignSelf: 'flex-end'}}>
            <EvilIcons name={'search'} color={Colors.textColor} size={40} />
          </TouchableOpacity>
          <MyTextInput
            placeholder={'Buscar...'}
            value={text}
            onChangeText={() => setText(text)}
          />
        </View>
        {/* <IconCompo name={'git-pull-request'} color={'white'} size={20} /> */}
      </View>

      <ScrollView>
        <FlatListCompo  image  data={DATA} />
       
      </ScrollView>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
TextSize:{
fontSize:40  
},
  searchBox: {
    width: wp('90%'),
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  searchBoxChild: {
    width: wp('90%'),
    marginVertical: hp('2%'),
    marginRight: 10,
    justifyContent: 'center',
  },
  divider:{
    width: wp('80%'),
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
    color: Colors.blackHeading,
  },
});
