import React, {useEffect} from 'react';
import {View, StyleSheet, StatusBar, LogBox, SafeAreaView} from 'react-native';

import BoatSlider from '../components/BoatSlider';
import Header from '../components/Header';

export default function Home() {
  useEffect(() => {
    LogBox.ignoreLogs([
      'Animated: `useNativeDriver` was not specified',
      'Warning: componentWillMount has been renamed',
    ]);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Header />
      <BoatSlider />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
