import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Fonts from '../../assets/theme/Fonts';

const LHeading = ({text}) => {
  return (
    <View>
      <Text style={styles.heading}>{text}</Text>
    </View>
  );
};

export default LHeading;

const styles = StyleSheet.create({
  heading: {
    // height:100,
    paddingVertical:10,
     fontSize: 25,
     lineHeight:31,
     fontFamily:Fonts.bold_600,
    fontWeight: '600',
    // fontFamily: 'Montserrat-Bold',
    lineHeight: 21,
    color:'#000000'
  },
});
