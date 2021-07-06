import React from 'react'
import { Text, View, Image, StyleSheet, ScrollView, FlatList } from 'react-native'

const rubros = require('../info/rubros.json');

let test = '';
const buscarRubro = (idRubro) => {
    rubros.forEach(rub => {
        if (rub.id === idRubro) {
            test = rub.name;
        }
    })
}

export default function Empresa(props) {

    const renderItem = ({item}) => (
        <TouchableOpacity style={styles.item}onPress={() => navigation.navigate('Profesional', item)}>
            <Text style={styles.title}> {item.name}</Text>
        </TouchableOpacity>
    );

    const link = props.navigation.state.params.uriFoto
    const empresa = props.navigation.state.params;
    const image = { uri: link }
    buscarRubro(empresa.rubro);
    const rubro = test;
    const data = props.navigation.state.params.trabajos;
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
                <Text style={styles.textFichTec}> Cantidad de Empleados: {empresa.fichaTecnica.cantidadEmpleados}</Text>
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

        <View>
            <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id}/>
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
        fontFamily: 'Futura'
    },
    image: {
        width: 300,
        height: 250,
        alignSelf: 'center',
        margin: 10,
        borderRadius: 15,

    },
    text: {
        fontSize: 15,
        marginLeft: 10,
        fontFamily: 'Futura'

    },
    container: {
        flex: 1,
    },
    textFichTec1: {
        fontSize: 20,
        fontFamily: 'Futura'

    },
    textFichTec: {
        borderBottomColor: "black",
        fontFamily: 'Futura'

    },
    viewFichTec: {
        padding: 3,
        margin: 2,
        backgroundColor: "#ccaacc"
    },


});