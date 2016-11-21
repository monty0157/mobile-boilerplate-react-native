import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { styles as s } from "react-native-style-tachyons";


export default function Button({ label, onPress, primary, raised }) {

  return(
    <TouchableOpacity onPress={onPress} >
      <View style={ raised && [s.bg_primaryBackgroundColor, s.o_80, s.pv3]} >
        <Text style={[s.f6, s.secondaryTextColor, s.tc]}>{label}</Text>
      </View>
    </TouchableOpacity>
  )
}
