import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';

import {Spacing} from '../../constants/values';
import DisplayContext from '../../context';

export default function ExitAction() {
  const {displayStatus, setDisplayStatus} = useContext(DisplayContext);

  if (displayStatus === false) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={() => setDisplayStatus(false)}>
      <View style={styles.action}>
        <Text style={styles.text}>✖</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  action: {
    zIndex: 99999,
    width: 30,
    height: 30,
    position: 'absolute',
    top: Spacing.screenTop,
    left: Spacing.screenHorizontal,
    backgroundColor: '#9e9e9e',
    alignItems: 'center',
    elevation: 5,
    borderColor: 'white',
    justifyContent: 'center',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 18,
  },
});
