import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Spec(props: any) {
  const {title, value} = props.details;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10,
  },
  title: {
    width: '50%',
    fontSize: 14,
    color: '#0d0b0c',
  },
  value: {
    width: '48%',
    fontSize: 14,
    color: '#808080',
  },
});
