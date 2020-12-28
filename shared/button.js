import React from "react";
import {View, Text, TouchableOpacity,StyleSheet} from 'react-native'


export default function FlatButton({title, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={style.button}>
                <Text style={style.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}


const style = StyleSheet.create({
    button: {
        paddingVertical: 7,
        paddingHorizontal: 5,
        borderRadius: 8,
        backgroundColor: 'darkcyan'
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        color: 'white',
        fontFamily: 'Amiri'
    }
})