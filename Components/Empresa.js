import React from 'react'
import { Text, View, Image } from 'react-native'

const rubros = require('../info/rubros.json');

let test = '';
const buscarRubro = (idRubro) => {
    rubros.forEach(rub => {
        if(rub.id == idRubro){
            test = rub.name;
        }
    })
}

export default function Empresa(empresaPar) {
    const empresa = empresaPar.navigation.state.params;
    buscarRubro(empresa.rubro);
    const rubro = test;
    console.log(rubro);
    return (
        <View>
            <Text> Nombre: {empresa.nombre} </Text>
            <Text> Ciudad: {empresa.ciudad} </Text>
            <Text> Dirección: {empresa.direccion} </Text>
            <Text> Rubro: {rubro}</Text>
            <Text> Ficha técnica: {empresa.fichaTecnica} </Text>
            <Text>
                Foto: 
                <Image source={empresa.uriFoto} />
            </Text>

        </View>
    )
}
