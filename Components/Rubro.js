import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

//mostrar empresas que pertenecen al rubro                  

const empresas = require('../info/empresas.json');

export default function Rubro(pItem){
    const navigation = pItem.navigation;
    const item = pItem.navigation.state.params;
    const filtered = [];
    empresas.forEach(empItem => {
        if(empItem.rubro === item.id)
            filtered.push(empItem);
    })
    const renderItem = (rItem) => (
        <TouchableOpacity style={styles.item} onPress={() => { navigation.navigate('Empresa', rItem.item)}}>
            <Text style={styles.text}> {rItem.item.nombre} </Text>
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Empresas de {item.name} </Text>
            {filtered ? <FlatList data={filtered} renderItem={renderItem} keyExtractor={item => item.id}/> : <Text style={styles.title}>No hay empresas</Text>}
            
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 4,
        marginHorizontal: 16,
        borderRadius: 15,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 6, // IOS
        shadowRadius: 1, //IOS     
        elevation: 2, // Android
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#ccaacc', 
        paddingTop: 50,
    },
    title: {
        fontFamily: 'Futura',
        alignSelf:'center',
        fontSize: 25,
        margin: 10,
    },
    text: {
        fontSize: 20,
    }
})