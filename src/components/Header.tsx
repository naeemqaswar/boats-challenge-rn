import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import Animated, {FadeOutUp} from 'react-native-reanimated';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import {Spacing} from '../constants/values';
import DisplayContext from '../context';

export default function Header() {
  const {displayStatus} = useContext(DisplayContext);

  if (displayStatus) return null;

  return (
    <Animated.View style={styles.header} exiting={FadeOutUp.duration(200)}>
      <Text style={styles.title}>Boats</Text>
      <TouchableWithoutFeedback onPress={() => {}}>
        <Image
          resizeMode="contain"
          style={styles.search}
          source={require('../../assets/icons/search.png')}
        />
      </TouchableWithoutFeedback>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 15 + getStatusBarHeight(true),
    left: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.screenHorizontal,
  },
  title: {
    color: '#0d0b0c',
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  search: {
    height: 20,
    width: 20,
  },
});
