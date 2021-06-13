import React from 'react'
import { Text, View } from 'react-native'

export default function Empresa(empresaPar) {
    const empresa = empresaPar.navigation.state.params;
    return (
        <View>
            <Text> {empresa.nombre} </Text>
        </View>
    )
}
