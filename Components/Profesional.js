import React, { Component } from 'react'
import { TouchableOpacity, Text, View, StyleSheet, ScrollView, Image, FlatList} from 'react-native'

const rubros = require('../info/rubros.json');
const trabajos = require('../info/trabajos.json');

let test = '';
let trabajoG = '';
const buscarRubro = (idRubro) => {
    rubros.forEach(rub => {
        if(rub.id == idRubro){
            test = rub.name;
        }
    })
}




export default function Profesional(props){
    const link = props.navigation.state.params.uriFoto
    const profesional = props.navigation.state.params;
    const image = { uri: link }
    const data = props.navigation.state.params.trabajos.empresa;
    const data1= props.navigation.state.params.trabajos.particular;
    buscarRubro(profesional.rubro);
    const rubro = test;


    const buscarTrabajo = (item) => {
        trabajos.forEach(trabajo => {
                if(item.id == trabajo.id){
                    trabajoG = trabajo;
                }
        })
            
    }

    const renderItem = ({item}) => ( 
        <TouchableOpacity style={styles.button}onPress={() => {
            buscarTrabajo(item);
            if(item.id != -1){
                props.navigation.navigate('Trabajo', trabajoG);}}
            }>
            
            <Text style={styles.buttonText}>{item.name}</Text>
        </TouchableOpacity>
    );
    return (
      
             <ScrollView style={styles.container}>
            <Text style={styles.title}>{profesional.name} </Text>
            <Text style={styles.text}>
               Rubro: {profesional.rubro} {"\n"}
               País:{profesional.nacion} {"\n"}
               Edad: {profesional.edad} {"\n"}
               Descripción: {profesional.desc} {"\n"}
            </Text>
            <Image source={image} style={styles.image} />
            <Text style={styles.title}>Trabajos del Profesional</Text>
            <Text style={styles.textTitle}>Particulares</Text>
            <FlatList
                data={data1}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <Text style={styles.textTitle}>Por empresa</Text>
      
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
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
        width: 400, 
        height: 250,
        alignSelf: 'center',
        margin: 0, 
        resizeMode: 'contain'
      
    },
    text: {
        fontSize: 15,
        marginLeft: 10,
        fontFamily: 'Futura'
        
    },
    container: {
        backgroundColor: '#eefffc', 
        flex: 1, 
    },
    textTitle: {
        fontSize: 20,
        marginLeft: 10,
        fontFamily: 'Futura'
        
    },
    button: {
        padding: 10,
        backgroundColor: 'black',
        width: 180,
        borderRadius: 15,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 30,
        width: 250,
        marginRight: 15,
    },
    buttonText: {
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 20,
        fontFamily: 'Futura'
    },

});