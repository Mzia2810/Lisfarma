import { StyleSheet, Text, View,Pressable } from 'react-native'
import React,{useState} from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import Colors from '../assets/theme/Colors';
import Fonts from '../assets/theme/Fonts';

const DropdownCompo = ({placeholder,}) => {

    
    // dropdown
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Apple', value: 'apple'},
      {label: 'Banana', value: 'banana'},
      {label: 'Orange', value: 'Kino'},
      {label: 'Strawberry', value: 'Strawberry'},
    ]);

  return (
    <View style={{ marginBottom: 5,backgroundColor:Colors.white}}>
    <DropDownPicker
      style={{
        borderWidth: 1,
        borderColor: '#D9DFF5',
      
      }}
      mode="BADGE"
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      dropDownContainerStyle={{
        // backgroundColor: "#D9DFF5",
        borderWidth: 1,
        borderColor: '#D9DFF5',
       
        // zIndex:zIndex1,
      }}
      placeholder={placeholder}
      placeholderStyle={{
        color: '#434040',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 19.45,
        fontFamily:Fonts.light_300,
      }}
    />
  </View>
  )
}

export default DropdownCompo

const styles = StyleSheet.create({})