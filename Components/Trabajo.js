import React, { Component } from 'react'
import { Text, View, TouchableOpacity} from 'react-native'

export default function Trabajo(pItem){

    const item = pItem.navigation.state.params;
    return (
        <View>
            <Text> {item.name} </Text>
            <TouchableOpacity onPress={() => pItem.navigation.navigate('Reserva', item)}> <Text>Reserva</Text> </TouchableOpacity>
        </View>
    )
}
