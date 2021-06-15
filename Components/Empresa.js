import React from 'react'
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native'

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
    const image = { uri: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/299-rob0849-ake.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=a7cf9a75058327a8e681569ce80221e4"}
    buscarRubro(empresa.rubro);
    const rubro = test;
    // console.log(rubro);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{empresa.nombre} </Text>
            <Text style={styles.text}>
                Ciudad: {empresa.ciudad} {"\n"}
                Dirección: {empresa.direccion} {"\n"}
                Rubro: {rubro}
            </Text>
            
            <Image source={image} style={styles.image} />
            <Text style={styles.text}> Ficha técnica: {empresa.fichaTecnica} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        color: 'black',
        alignSelf: 'center',
        marginTop: 10, 
    },
    image: {
        width: 300, 
        height: 250,
        alignSelf: 'center',
        margin: 10, 
        borderRadius: 15,
      
    },
    text: {
        fontSize: 20,
        marginLeft: 10,
        
    },
    container: {
        backgroundColor: '#eefffc', 
        flex: 1, 
    }

});