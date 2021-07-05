import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Image, FlatList} from 'react-native'

const rubros = require('../info/rubros.json');

let test = '';
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

    const renderItem = ({item}) => ( 
            <Text style={styles.text}>{item.name}</Text> //falta filtrar por profesional
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
            {/* filtrar por profesional */}
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

});