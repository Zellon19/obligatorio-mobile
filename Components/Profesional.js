import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Image, FlatList} from 'react-native'

const data = require('../info/trabajos.json');

export default function Profesional(props){
    const link = props.navigation.state.params.uriFoto
    const profesional = props.navigation.state.params;
    const image = { uri: link }
    
    const renderItem = ({item}) => ( 
            <Text style={styles.text}>{item.name}</Text> //falta filtrar por profesional
    );
    return (
      
             <ScrollView style={styles.container}>
            <Text style={styles.title}>{profesional.name} </Text>
            <Text style={styles.text}>
               Rubro: {profesional.rubros} {"\n"}
               País:{profesional.nacion} {"\n"}
               Edad: {profesional.edad} {"\n"}
               Descripción: {profesional.desc} {"\n"}
            </Text>
            <Image source={image} style={styles.image} />
            <Text style={styles.title}>Trabajos del Profesional</Text>
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

});