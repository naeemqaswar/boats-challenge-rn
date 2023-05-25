import React, {useEffect} from 'react';
import { View, StyleSheet, StatusBar, LogBox, } from 'react-native'

import BoatSlider from '../components/BoatSlider';
import Header from '../components/Header';

export default function Home() {
  useEffect(()=>{
    LogBox.ignoreLogs([
      'Animated: `useNativeDriver` was not specified',
      'Warning: componentWillMount has been renamed',
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle='dark-content' />
      <Header/>
      <BoatSlider/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});