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

export default function Empresa(props) {
    const link = props.navigation.state.params.uriFoto
    const empresa = props.navigation.state.params;
    const image = { uri: link }
    buscarRubro(empresa.rubro);
    const rubro = test;
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{empresa.nombre} </Text>
            <Text style={styles.text}>
                Ciudad: {empresa.ciudad} {"\n"}
                Dirección: {empresa.direccion} {"\n"}
                Rubro: {rubro}
            </Text>
            <Image source={image} style={styles.image} />
            <Text style={styles.textFichTec1}> Ficha técnica: </Text>

            <View style={styles.viewFichTec}>
            <Text style={styles.textFichTec}> Cantidad: {empresa.fichaTecnica.cantidadEmpleados}</Text>
            </View>

            <View style={styles.viewFichTec}>
            <Text style={styles.textFichTec}> Teléfono: {empresa.fichaTecnica.telefono}</Text>
            </View>

            <View style={styles.viewFichTec}>
            <Text style={styles.textFichTec}> Email: {empresa.fichaTecnica.email}</Text>
            </View>

            <View style={styles.viewFichTec}>
            <Text style={styles.textFichTec}> Persona de Contacto: {empresa.fichaTecnica.personaContacto}</Text>
            </View>
            
            <View style={styles.viewFichTec}>
            <Text style={styles.textFichTec}> Slogan: {empresa.fichaTecnica.slogan}</Text>
            </View>
                 
        </ScrollView>
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
    },
    textFichTec1:  {
        fontSize: 30,

    },
    textFichTec: {
        borderBottomColor: "black",

     
    },
    viewFichTec: {
        padding: 3,
        margin: 2,
        backgroundColor: "#ffccff"
    }

});