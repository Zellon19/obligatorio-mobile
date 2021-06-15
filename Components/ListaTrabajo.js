import React from 'react';
import { SectionList, Text, View, FlatList, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

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

const data = require('../info/trabajos.json');
const empresas = require('../info/empresas.json') //Ver dsp usar los arrays de trabajos en empresas

export default function ListaEmpresa({navigation}) {
    const renderItem = ({item}) => (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Trabajo', item)}>
            <Text style={styles.title}> {item.name}</Text>
        </TouchableOpacity>
    );

    let dataE = [];
    let dataP = [];
    data.forEach(item => {
        if(item.promPor == "Empresa"){
            dataE.push(item);
        }
        else{
            dataP.push(item);
        }
    })
    let array = [{title:"Empresa", data: dataE}, {title:"Profesionales", data: dataP}]
    return (
        <View style={styles.container}>
            <SectionList
                sections={array}
                keyExtractor={(item, index) => item + index}
                renderItem={renderItem}
                renderSectionHeader={({ section }) => (<Text>{section.title}</Text>)}
            />
        </View>
    )
}