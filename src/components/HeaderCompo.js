import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import {FontAwesome} from 'react-native-vector-icons';
// import Icon from 'react-native-vector-icons/FontAwesome';

import LHeading from './heading/LHeading';
import IconCompo from './heading/IconCompo';

const HeaderCompo = () => {
  

  return (
    <View style={styles.headerArea}>
      <LHeading text={'Mis pacientes'} />
      <IconCompo/>

      
    
    </View>
  );
};

export default HeaderCompo;

const styles = StyleSheet.create({
  headerArea: {
    width: wp('90%'),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
});
