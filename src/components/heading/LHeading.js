import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

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
    fontSize: 25,
    fontWeight: '600',
    fontFamily: 'Montserrat',
    lineHeight: 31,
    color:'#000000'
  },
});
