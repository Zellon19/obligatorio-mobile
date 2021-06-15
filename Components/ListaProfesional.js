import React from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#aaffef',
        paddingTop: 50,
    },
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
    title: {
        fontSize: 25,
    }
})

const data = require('../info/profesionales.json');

export default function ListaEmpresa({navigation}) {
    const renderItem = ({item}) => (
        <TouchableOpacity style={styles.item}onPress={() => navigation.navigate('Profesional', item)}>
            <Text style={styles.title}> {item.name}</Text>
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
            <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id}/>
        </View>
    )
}