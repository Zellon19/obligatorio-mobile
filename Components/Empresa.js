import React from 'react'
import { Text, View, Image, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native'

const rubros = require('../info/rubros.json');

let test = '';
const buscarRubro = (idRubro) => {
    rubros.forEach(rub => {
        if (rub.id === idRubro) {
            test = rub.name;
        }
    })
}

const trabajos = require('../info/trabajos.json');
const profs = require('../info/profesionales.json')
let trabajoGlobal = '';
let profGlobal = '';

const buscarTrabajos = (item) => {
    trabajos.forEach(tra => {
        if (tra.id === item.id) {
            trabajoGlobal = tra;
        }
    })
}

const buscarProfesional = (item) => {
    profs.forEach(prof => {
        if (prof.id === item.id) {
            profGlobal = prof;
        }
    })
}


export default function Empresa(props) {
    const navigation = props.navigation;
    const item = props.navigation.state.params;

    const renderItem = ({item}) => (
        <TouchableOpacity style={styles.item}onPress={() => {buscarTrabajos(item)
            navigation.navigate('Trabajo', trabajoGlobal)}}>
            <Text style={styles.textFichTec1}> {item.name}</Text>
        </TouchableOpacity>
    );

    const renderItemProf = ({item}) => (
        <TouchableOpacity style={styles.item}onPress={() => {
            buscarProfesional(item);
            if(item.id != -1){
                navigation.navigate('Profesional', profGlobal);
            }
            
            }}>
            <Text style={styles.textFichTec1}> {item.name}</Text>
        </TouchableOpacity>
    );

    const link = props.navigation.state.params.uriFoto;
    const empresa = props.navigation.state.params;
    const image = { uri: link }
    buscarRubro(empresa.rubro);
    const rubro = test;

    const data = props.navigation.state.params.trabajos;
    const dataProf = props.navigation.state.params.profs;


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
            <Text style={styles.textFichTec1}>Trabajos de la Empresa: </Text>
        <View style={styles.viewFichTec}>
            <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id}/>
        </View>
        <Text style={styles.textFichTec1}>Profesionales de la Empresa: </Text>
        <View style={styles.viewFichTec}>
            <FlatList data={dataProf} renderItem={renderItemProf} keyExtractor={item => item.id}/>
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