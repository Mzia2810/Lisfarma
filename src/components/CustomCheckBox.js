import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Fonts from '../assets/theme/Fonts';
import Colors from '../assets/theme/Colors';

const CustomCheckBox = ({
  toggleCheckBox,
  setToggleCheckBox,
  CheckBoxText,
  color,
}) => {
  return (
    <View style={styles.CheckBoxArea}>
      <CheckBox
        tintColors={{true: Colors.lightBlueSky, false: Colors.lightBlueSky}}
        disabled={false}
        value={toggleCheckBox}
        onValueChange={newValue => setToggleCheckBox(newValue)}
      />
      {color ? (
        <Text style={[styles.CheckBoxText, {color: '#04122B'}]}>
          {CheckBoxText}
        </Text>
      ) : (
        <Text style={[styles.CheckBoxText]}>{CheckBoxText}</Text>
      )}
    </View>
  );
};

export default CustomCheckBox;

const styles = StyleSheet.create({
  CheckBoxText: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: Fonts.regular,
    lineHeight: 23,
    marginHorizontal: wp('2%'),
  },
  CheckBoxArea: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: wp('70%'),
    marginVertical: hp('1%'),
  },
});
