import React, {useContext} from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'

import {Spacing} from "../constants/values";
import DisplayContext from "../context";

export default function Header() {
    const {displayStatus} = useContext(DisplayContext);
  
    if(displayStatus) return null;

    return <View style={styles.header}>
      <Text style={styles.title}>Boats</Text>
      <TouchableWithoutFeedback onPress={()=>{}}>
        <Image
          resizeMode='contain'
          style={styles.search}
          source={require('../../assets/icons/search.png')}
        />
      </TouchableWithoutFeedback>
    </View>;
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 15,
    left: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.screenHorizontal,
  },
  title: {
    color: '#0d0b0c',
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: .5,
  },
  search:{
    height: 20,
    width: 20,
  },
});