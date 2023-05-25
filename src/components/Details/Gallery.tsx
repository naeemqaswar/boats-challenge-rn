import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Gallery(props: any) {
  return (
    <View style={styles.container}>
        <Image 
            resizeMode='cover'
            style={styles.container} 
            source={props.src}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 130,
        height: 120,
        marginRight: 10,

        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    image: {
        height: '100%',
        width: '100%',
    },
});