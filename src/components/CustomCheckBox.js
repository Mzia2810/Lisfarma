import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CustomCheckBox = ({toggleCheckBox, setToggleCheckBox, CheckBoxText}) => {
  return (
    <View style={styles.CheckBoxArea}>
      <CheckBox
      
      // tintColors={ true? '#DFDFF5' : 'green' }
        disabled={false}
        value={toggleCheckBox}
        onValueChange={newValue => setToggleCheckBox(newValue)}
      />
      <Text style={styles.CheckBoxText}>{CheckBoxText}</Text>
    </View>
  );
};

export default CustomCheckBox;

const styles = StyleSheet.create({
  CheckBoxText: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily:'Montserrat-Regular',
    lineHeight: 23,
    marginHorizontal: wp('2%'),
  },
  CheckBoxArea: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: wp('70%'),
    marginVertical:hp('1%')
  },
});
