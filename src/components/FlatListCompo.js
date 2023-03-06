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
import {useNavigation} from '@react-navigation/native';
import Fonts from '../assets/theme/Fonts';

const FlatListCompo = ({data}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: wp('90%'),
        justifyContent: 'center',
        alignSelf: 'center',
      }}>
      <FlatList
        data={data}
        renderItem={(item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('DeltailPatient')}
            style={styles.listBtn}>
            <View style={styles.listChild}>
              <View style={styles.listImage}>
                <Image source={require('../assets/Rectangle5938.png')}  />
                <Text style={styles.listText}>Julie Matt</Text>
              </View>

              <Image source={require('../assets/Vector.png')} />
            </View>
            <View style={styles.divider}></View>

            <View style={styles.homepagePatient}>
              <Text style={styles.textBottom}>Diagnóstico</Text>
            <Text style={styles.desc}>
              Fusce eu facilisis dolor. Praesent convallis egestas tempus.
              Curabitur nec blandit eros, eget rhoncus lacus.....
            </Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        // extraData={selectedId}
      />
    </View>
  );
};

export default FlatListCompo;

const styles = StyleSheet.create({

  homepagePatient:{width:wp('80%'),alignSelf:'center',justifyContent:'center',alignItems:'flex-start',paddingVertical:10}
  ,FlatListText: {
    fontSize: 14,
    fontWeight: '600',
    // fontFamily:Fonts.bold_600,
    lineHeight: 19.5,
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
    width: wp('45%'),
  },
  listText: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 21,
    fontFamily:Fonts.bold_600,
    color: Colors.textColor,
  },
  textBottom: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily:Fonts.bold_600,
    lineHeight: 19.5,
    color: Colors.blackHeading,
  },
  
  desc:{  fontSize: 16,
    fontWeight: '300',
    fontFamily:Fonts.light_300,
    lineHeight: 26.5,
    color: Colors.blackHeading,}
});
