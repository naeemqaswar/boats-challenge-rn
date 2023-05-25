import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Spec(props: any) {
    const {title, value} = props.details;

    return (
        <View style={styles.specItem}>
            <Text style={styles.specItemTitle}>{title}</Text>
            <Text style={styles.specItemValue}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    specItem: {
        // borderWidth: 1,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 10,
    },
    specItemTitle: {
        // borderWidth: 1,
        width: '50%',
        // fontWeight: 'bold',
        fontSize: 14,
        color: '#0d0b0c',
    },
    specItemValue: {
        width: '48%',
        fontSize: 14,
        color: '#808080',
    },
});