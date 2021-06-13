import React from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#10f4f3',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    }
});

const data = require('../info/profesionales.json');

export default function ListaEmpresa({navigation}) {
    const renderItem = ({item}) => (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Profesional', item)}>
            <Text style={styles.title}> {item.name}</Text>
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
            <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id}/>
        </View>
    )
}