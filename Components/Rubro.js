import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default function Rubro(pItem){

    const item = pItem.navigation.state.params;
    return (
        <View>
            <Text> {item.name} {"\n"} aquí se encontrará una lista de las empresas de este rubro </Text>
            
        </View>
    )
}