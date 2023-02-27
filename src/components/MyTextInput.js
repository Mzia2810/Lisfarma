import React, { useState } from 'react';
import { TextInput } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import Colors from '../assets/theme/Colors';


export default function MyTextInput({text,onChangeText,placeholder}) {
 
  return (
    <TextInput
      style={styles.input}
      value={text}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={Colors.textColor}
    //   maxLength={50}
      editable={true}
    //   autoFocus={false}
    //   keyboardType="default"
    //   returnKeyType="done"
    //   onSubmitEditing={() => console.log('Submitted')}
    //   onFocus={() => console.log('Focused')}
    //   onBlur={() => console.log('Blurred')}
    //   autoCapitalize="sentences"
    //   autoCorrect={true}
    //   autoCompleteType="off"
    //   contextMenuHidden={false}
    //   blurOnSubmit={true}
    //   caretHidden={false}
    //   clearButtonMode="while-editing"
    //   clearTextOnFocus={false}
    //   dataDetectorTypes="none"
    //   enablesReturnKeyAutomatically={false}
    //   importantForAutofill="auto"
    //   inlineImageLeft="search_icon"
    //   inlineImagePadding={8}
    //   keyboardAppearance="default"
    //   onEndEditing={() => console.log('Ended editing')}
    //   onScroll={() => console.log('Scrolled')}
    //   selectionColor="blue"
    //   secureTextEntry={false}
    //   selectTextOnFocus={true}
    //   showSoftInputOnFocus={true}
    //   spellCheck={true}
    //   textContentType="none"
    //   textBreakStrategy="highQuality"
    //   underlineColorAndroid="transparent"
    />
  );
}

const styles = {
  input: {
    borderRadius:10,
    height:hp('8%') ,
    borderColor: Colors.lightBlueSky,
    borderWidth: 1,
    paddingHorizontal: 15,
    // backgroundColor:Colors.placeholderBackground,
    // marginVertical: 5,
  },
};
