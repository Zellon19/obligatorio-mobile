import React from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    }
})

const data = require('../info/profesionales.json');

export default function ListaEmpresa({navigation}) {
    const renderItem = ({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('Profesional', item.id)}>
            <Text> {item.name}</Text>
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
            <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id}/>
        </View>
    )
}