import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

export default function Gallery(props: any) {
  return (
    <View style={styles.container}>
      <Image resizeMode="cover" style={styles.image} source={props.src} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 130,
    height: 120,
    marginRight: 10,
  },
  image: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
