import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

import { Spacing } from '../../constants/values';
import DisplayContext from "../../context";

export default function ExitAction() {
    const {displayStatus, setDisplayStatus} = useContext(DisplayContext);

    if(displayStatus === false){
        return null;
    }

    return <TouchableNativeFeedback onPress={()=>setDisplayStatus(false)}>
        <View style={styles.action}>
            <Text style={styles.text}>✖</Text>
        </View>
    </TouchableNativeFeedback>;
}

const styles = StyleSheet.create({
    action: {
        zIndex: 99999,
        width: 30,
        height: 30,
        position: 'absolute',
        top: Spacing.screenTop,
        left: Spacing.screenHorizontal,
        // paddingHorizontal: Spacing.screenHorizontal,
        // paddingTop: Spacing.screenTop,
        backgroundColor: '#9e9e9e',
        // justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 2,
        // marginTop: 10,
        // borderWidth: 1,
        elevation: 5,
        borderColor: 'white',
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'lucida grande',
        fontWeight: 'bold',
    },
});